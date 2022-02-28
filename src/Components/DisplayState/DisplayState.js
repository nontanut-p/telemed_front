import React, {useState, useContext, useEffect} from 'react'
import Login from '../Login/Login'
import {logginContext} from '../../App'
import ModeSelection from '../ModeSelection/ModeSelection'
import {AuthContext} from '../../Context/AuthContext/AuthContext'
import {login,useAuth,AuthState,loadUser} from '../../Context/AuthContext/AuthState'
import  {useNavigate}  from "react-router-dom";

export default function DisplayState(){
    const [isAuth, setisAuth] = useState(false)
    const history = useNavigate();
    useEffect(()=>{
        
        if(localStorage.getItem("token")){
            setisAuth(true)
           
        }
 
    },[])

    return(
        (isAuth?  <ModeSelection/> : <Login/>)
    )
}

