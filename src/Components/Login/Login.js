import React, { useContext , useEffect, useState} from "react";
import {logginContext} from '../../App'
import {AuthContext} from '../../Context/AuthContext/AuthContext'
import {login,useAuth,AuthState,loadUser} from '../../Context/AuthContext/AuthState'

export default function Login(){
    const [authState, authDispatch] = useAuth();
    let {accessToken,user} = authState
    const [userName, setUserName] = useState('walter.beau@mecallapi.com');
    const [passWord, setpassWord] = useState('mecallapi');
 
  
    const submitLogin = async ()=>{
     
     
      console.log(authState, 'authState', 'token', accessToken , 'user' , user)
      login(authDispatch,  {username : userName , password : passWord})
      
     
 
    }

   
    return(
        
      
        <div className="flex items-center justify-center my-auto ">
        <div className="bg-white md:w-1/3  shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
            <p className="text-center text-xl font-semibold"> โปรดเข้าสู่ระบบเพื่อเข้าใช้งาน </p>
            <div className="mb-2">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input onChange={(e)=>{setUserName(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input  onChange={(e)=>{setpassWord(e.target.value)}} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
           
            </div>
            <div className="flex items-center justify-center">
            <button onClick={()=>{submitLogin()}} className="bg-sky-500/75 hover:bg-cyan-600  p-2 rounded-lg " type="button">
                เข้าสู่ระบบ
            </button>
            <button className=" ml-1 bg-sky-500/75 hover:bg-cyan-600  p-2 rounded-lg " type="button">
                ลืมรหัสผ่าน
            </button>
            </div>
        </div>
        </div>


    
     
    )
}