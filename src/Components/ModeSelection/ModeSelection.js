import React, { useEffect, useState }  from "react";
import {login,useAuth,AuthState,logout} from '../../Context/AuthContext/AuthState'
import { useNavigate } from 'react-router-dom';

export default function ModeSelection(){
    const navigate = useNavigate();
    let [userInfo, setUserInfo] = useState('')
    const [authState, authDispatch] = useAuth();
    useEffect(()=>{
        setUserInfo(JSON.parse(localStorage.getItem('user')))
    
        console.log(userInfo)
    },[])
    
    const signOut = ()=>{
        logout(authDispatch)
        window.location.href = "/main";
    }

    const handleClick = (e)=>{
        e.preventDefault()
        navigate('/record')
       
    }
    const handleClickStream = (e)=>{
        e.preventDefault()
        navigate('/stream')
       
    }
    let bert = 'https://www.perfectpedigreethailand.com/uploads/5/2/5/4/52548193/golden-retriever-p_1_orig.jpg' 

    return(
        <div className="bg-white">
         <button className='bg-red-500 hover:bg-red-200 hover:cursor-pointer  shadow-lg rounded-lg p-1'onClick={signOut}> Logout </button>
       
        <div className="flex justify-center ">
            
        <img className="flex justify-center object-cover h-28 w-30 " src={bert} alt="Logo" />
        </div>
       
        <h1 className="text-center  text-2xl mt-10">Welcome K.{userInfo.fname} {userInfo.lname} {userInfo.username}</h1>
        
        <h1 className="text-center  text-2xl mt-10">โปรดเลือกโหมดที่ต้องการใช้งาน</h1>
        <div  className="text-center  mt-2 ">
        สถานะการเชื่อมต่อกับเซิฟเวอร์ :
        
        <span className="animate-ping text-emerald-500 "> ONLINE </span>
        </div>

     
        <div className="flex items-center justify-center my-auto mt-10 py-10">
            
        <div className="grid grid-cols-2 gap-4 md:w-1/2 " >
        <div onClick={handleClickStream} className="bg-zinc-100 hover:bg-green-200 hover:cursor-pointer  shadow-lg rounded-lg text-center  box-border w-1/1 px-8 pt-6 pb-8 mb-4 ">
            <h1 className="text-xl">เชื่อมต่อกับเครื่อง VMED ที่ออนไลน์ </h1>
        </div>
            
        <div onClick={handleClick} className="bg-zinc-100 hover:bg-blue-200 hover:cursor-pointer  shadow-lg rounded-lg text-center   box-border  px-8 pt-6 pb-8 mb-4 w-1/1 ">
             <button className="text-xl"> อ่านข้อมูลที่บันทึกย้อนหลัง </button>     
        </div>
        </div>
        </div>
        </div>
    )
}