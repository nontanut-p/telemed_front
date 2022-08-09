import React, {useReducer, useContext, useEffect} from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'
import  AuthReducer  from './AuthReducer'


export const useAuth = ()=>{
    const {state, dispatch} = useContext(AuthContext)
    return [state,dispatch]
}

export const loadUser = async (dispatch) => {
    try{
        const res = await axios.get('https://www.mecallapi.com/api/users')
        dispatch({
            type: 'Login',
            payload : res.data
        }) 
    } catch(err){
        dispatch({type : 'error'})
    }
}

export const socketID = async(dispatch)=>{
    try{
        dispatch({
            type: 'socketID',
            payload : dispatch.socketID
        })
    }catch(err){
        dispatch({type : 'error'})
    }
}

export const logout = async (dispatch) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    try{
        dispatch({
            type: 'Logout',
        }) 
    } catch(err){
        dispatch({type : 'error'})
    }
}

export const login = async (dispatch, formData) => {
    
    try {
      const res = await axios.post('https://www.mecallapi.com/api/login', formData);
      console.log(res.data.user, 'user')
      console.log(res.data.accessToken, 'user')
      let dataPayload = {
          accessToken : res.data.accessToken,
          user : res.data.user
      }
      dispatch({
        type: 'Login',
        payload: dataPayload
      });

      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user))
    //   window.location.href = "/main";

    } catch (err) {
      console.log(err)
      dispatch({
        type: 'error',
      });
    }
  };
  


const AuthState = (props) =>{
    const initailState ={
        accessToken :null,
        user :null,
        socketID : null
 
    }
    const [state, dispatch] = useReducer(AuthReducer, initailState)
    
    return (
        <AuthContext.Provider value={{state: state , dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState