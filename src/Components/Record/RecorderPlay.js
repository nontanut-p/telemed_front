import React, { useEffect, useState } from 'react'
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';
import wavUrl from '../../SoundWav/xxx_1.mp3'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );  
const options = {
    //responsive: true,
    maintainAspectRatio: false ,
    animation : {
      duration : 0
    },
    plugins: {
      legend: {
        display: false,
     },

    },
  };

let ECG = [0.8, 0.83, 0.81, 0.8, 0.8, 0.81, 0.82, 0.79, 0.82, 0.81, 0.83, 0.81, 0.81, 0.83, 0.8, 0.84, 0.82, 0.81, 0.84, 0.81, 
  0.8, 0.83, 0.8, 0.81, 0.82, 0.81, 0.82, 0.8, 0.81, 0.81, 0.83, 0.81, 0.81, 0.84, 0.84, 0.82, 0.81, 0.8, 0.82, 0.81, 0.81, 0.81, 0.83, 0.81, 0.78, 0.8, 0.8, 0.81, 0.82, 0.81, 0.81, 0.81, 0.8, 0.82, 0.81, 0.88, 0.88, 0.93, 0.88, 0.84, 0.83, 0.8, 0.76, 0.81, 0.82, 0.81, 0.84, 0.8, 0.81, 0.81, 0.8, 0.81, 0.82, 0.81, 0.83, 0.81, 0.83, 0.81, 0.81, 0.83, 0.86, 0.84, 0.83, 0.81, 0.85, 0.83, 0.86, 0.87, 0.86, 0.88, 0.85, 0.85, 0.86, 0.84, 0.88, 0.87, 0.88, 0.86, 0.84, 0.81, 0.83, 0.81, 0.84, 0.82, 0.83, 0.83, 0.81, 0.8, 0.81, 0.77, 0.82, 0.79, 0.81, 0.82, 0.8, 0.8, 0.82, 0.78, 0.82, 0.8, 0.83, 0.8, 0.81, 0.81, 0.8, 0.81, 0.82, 0.81, 0.86, 0.81, 0.8, 0.8, 0.8, 0.81, 0.83, 0.83, 0.77, 0.8, 0.8, 0.8, 0.81, 0.79, 0.81, 0.81, 0.81, 0.8, 0.8, 0.8, 0.8, 0.81, 0.83, 0.81, 0.8, 0.81, 0.81, 0.81, 0.8, 0.81, 0.81, 0.8, 0.8, 0.8, 0.8, 0.81, 0.82, 0.81, 0.83, 0.8, 0.8, 0.81, 0.8, 0.82, 0.82, 0.81, 0.81, 0.8, 0.8, 0.8, 0.83, 0.82, 0.82, 0.84, 0.84, 0.85, 0.87, 0.88, 0.86, 0.87, 0.86, 0.81, 0.8, 0.82, 0.8, 0.81, 0.8, 0.82, 0.81, 0.8, 0.81, 0.81, 0.8, 0.83, 0.82, 0.86, 0.83, 0.82, 0.8, 0.83, 0.81, 0.83, 0.83, 0.84, 0.84, 0.84, 0.83, 0.84, 0.84, 0.86, 0.85, 0.83, 0.86, 0.87, 0.85, 0.85, 0.83, 0.86, 0.85, 0.86, 0.84, 0.83, 0.81, 0.8, 0.78, 0.82, 0.83, 0.81, 0.8, 0.8, 0.8, 0.76, 0.81, 0.78, 0.81, 0.81, 0.73, 0.84, 0.8, 0.81, 0.8, 0.79, 0.84, 0.8, 0.8, 0.8, 0.78, 0.79, 0.8, 0.83, 0.81, 0.8, 0.8, 0.8, 0.8, 0.81, 0.82, 0.81, 0.81, 0.8, 0.8, 0.8, 0.8, 0.81, 0.78, 0.81, 0.82, 0.78, 0.81, 0.76, 0.81, 0.82, 0.81, 0.81, 0.8, 0.77, 0.8, 0.77, 0.81, 0.79, 0.79, 0.8, 0.82, 0.8, 0.78, 0.83, 0.82, 0.81, 0.83, 0.81, 0.8, 0.8, 0.77, 0.79, 0.78, 0.81, 0.81, 0.78, 0.81, 0.8, 0.8, 0.84, 0.84, 0.88, 0.9, 0.86, 0.84, 0.84, 0.81, 0.76, 0.78, 0.79, 0.81, 0.78, 0.83, 0.78, 0.81, 0.81, 0.82, 0.84, 0.81, 0.81, 0.81, 0.77, 0.8, 0.83, 0.82, 0.83, 0.81, 0.86, 0.74, 0.83, 0.83, 0.83, 0.79, 0.9, 0.88, 0.9, 0.83, 0.86, 0.86, 0.88, 0.86, 0.86, 0.85, 0.87, 0.84, 0.81, 0.81, 0.82, 0.79, 0.84, 0.8, 0.81, 0.8, 0.78, 0.79, 0.82, 0.81, 0.81, 0.8, 0.8, 0.8, 0.81, 0.81, 0.78, 0.79, 0.79, 0.81, 0.77, 0.76, 0.78, 0.81, 0.79, 0.79, 0.79, 0.78, 0.77, 0.8, 0.8, 0.77, 0.79, 0.77, 0.79, 0.8, 0.77, 0.78, 0.75, 0.81, 0.79, 0.79, 0.81, 0.76, 0.8, 0.78, 0.77, 0.79, 0.79, 0.79, 0.78, 0.75, 0.78, 0.77, 0.79, 0.79, 0.79, 0.81, 0.78, 0.76, 0.8, 0.78, 0.78, 0.83, 0.79, 0.78, 0.78, 0.8, 0.78, 0.79, 0.78, 0.79, 0.82, 0.78, 0.77, 0.76, 0.78, 0.81, 0.78, 0.81, 0.84, 0.84, 0.83, 0.87, 0.81, 0.86, 0.82, 0.79, 0.77, 0.78, 0.8]
let labels = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']

let bert = 'https://www.perfectpedigreethailand.com/uploads/5/2/5/4/52548193/golden-retriever-p_1_orig.jpg'
var i = 0
const random = (plot,data,setData)=> {
      plot = []
      i = i + 1
      if(i == 950){
        i = 0
      }
      plot = ECG.slice(i,i+50)
      data = {
        labels,
          datasets: [
            {
              data: plot,
              borderColor: 'rgb(255, 50, 50)',
              
              pointRadius: 0,
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
        
          ],
        };
      setData(data)
}
const randomLead = (plot,data,setData)=> {
  plot = []
  i = i + 1
  if(i == 950){
    i = 0
  }
  
  plot = ECG.slice(i+20,i+70)
  
  data = {
    labels,
      datasets: [
        {
          data: plot,
          borderColor: 'rgb(255, 50, 50)',
          
          pointRadius: 0,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
    
      ],
    };
  setData(data)
}
export default function RecorderPlay(){
    let plot = []
    let [HR, setHR]  = useState(80)
    let [SP02, setSPO2] = useState(98)
    let [data , setData] = useState({
      labels,
        datasets: [
          {
            data: plot,
            borderColor: 'rgb(255, 50, 50)',
            pointRadius: 0,
            backgroundColor: 'rgba(255, 255, 255, 1)',
          },
      
        ],
      })
      let [lead2 , setlead2] = useState({
        labels,
          datasets: [
            {
              data: plot,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
        
          ],
        })
      useEffect(()=>{
        const interval = setInterval(()=>{
          random(plot,data,setData)
          randomLead(plot,data,setlead2)

        }, 500)
        const interval2 = setInterval(()=>{
          let hr  = Math.floor(Math.random() * (67 - 65) ) + 65;
          let sp02  = Math.floor(Math.random() * (100 - 98) ) + 98;
          setHR(hr)
          setSPO2(sp02)
        }, 5000)
      }, [])

    return(
        <div>

            <div className="flex justify-center mt-10 ">

            <div className=' bg-zinc-100 grid grid-cols-1 gap-5 md:w-2/3 shadow-lg outline-slate-200'>
            
            <div className="flex justify-center ">
            
            <img className="flex justify-center object-cover h-28 w-30 mt-2" src={bert} alt="Logo" />
            </div>

            <h1 className="text-center  text-2xl m-5">ข้อมูลผู้ป่วย ID: 3369 ชื่อ Mr.  Bert Transformer  </h1>
            <audio controls>
            <source src={wavUrl} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
            <div className='grid grid-cols-1 gap-5  '>
            <div className="grid grid-cols-5 mb-2" >
                <div className='bg-green-200 text-center  border-2 '>
                    <h1>Heart Rates : {HR} </h1>
                </div>
                <div className='bg-sky-200 text-center  border-2 '>
                    <h1>SP02 : {SP02}%</h1>
                </div>
                <div className='bg-red-200 text-center  border-2 '>
                    <h1>RR : 74</h1>
                </div>
                <div className='bg-pink-200 text-center  border-2 '>
                    <h1>Sys : 130 DIA : 88</h1>
                </div>
                <div className='bg-orange-200 text-center  border-2 '>
                    <h1>Temp : 35.6</h1>
                </div>
            </div>
            <div className='bg-black'>
            <div className='bg-black'>
            <Line height="200px" options={options} data={data} />
            
            </div>
            <div className='bg-black'>
            <Line height="200px" options={options} data={lead2} />
            
            </div>
            <div className='bg-black'>
            <Line height="200px" options={options} data={data} />
            
            </div>
            </div>
            <div>
            </div>
            </div>
            </div>
            </div>
    
        </div>
    )
}