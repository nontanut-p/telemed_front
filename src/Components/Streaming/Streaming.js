import React from "react";



export default function Streaming(value){
    return(
            
       <div className="flex items-center justify-center  py-2">
           
       
       <div className="bg-zinc-100 hover:bg-blue-200 hover:cursor-pointer  shadow-lg rounded-lg text-center  box-border w-1/1 px-8 pt-5 pb-5 mb-4 ">
           <h1 className="text-xl"> VMED ID :  {value.value} <span className="animate-ping text-emerald-500 "> ONLINE </span> </h1>
       </div>
           
 
       </div>
   
    )
}

//https://www.scichart.com/documentation/js/current/Glow%20and%20DropShadow%20Shader%20Effects.html