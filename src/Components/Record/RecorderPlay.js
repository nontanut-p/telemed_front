import React from 'react'

let bert = 'https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2019/04/09110726/Bert-Head.png'

export default function RecorderPlay(){
    return(
        <div>
            
            <div className="flex justify-center mt-10 ">
            
           
            
            <div className=' bg-zinc-100 grid grid-cols-1 gap-5 md:w-1/2 shadow-lg outline-slate-200'>
            
            <div className="flex justify-center ">
            
            <img className="flex justify-center object-cover h-28 w-30 " src={bert} alt="Logo" />
            </div>
            <h1 className="text-center  text-2xl m-5">ข้อมูลผู้ป่วย ID: 155480 ชื่อ คุณ ทดสอบ ทดสอบเทส  </h1>

        

            </div>
            </div>
    
        </div>
    )
}