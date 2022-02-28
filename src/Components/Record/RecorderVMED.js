import React from "react";

export default function VmedRecorder(value){
    console.log(value.value)
    return(
        <>
    
   
    
       <div className="flex items-center justify-center  py-2">
           
       
       <div className="bg-zinc-100 hover:bg-blue-200 hover:cursor-pointer  shadow-lg rounded-lg text-center  box-border w-1/1 px-8 pt-5 pb-5 mb-4 ">
           <h1 className="text-xl"> record uuid :  {value.value} </h1>
       </div>
           
 
       </div>
   
       </>
    )
}