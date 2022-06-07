import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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
const random = (plot,data,setData,currentTime,duration)=> {
      plot = []
      
      let step = ECG.length / duration
      console.log(ECG.length)
      let next_step =  currentTime * step
      console.log(next_step,next_step+step)

      if(!next_step){
        next_step = 0 
      }
      plot = ECG.slice(next_step,next_step + 200 )
      if(currentTime == duration){
        // console.log('check true')
        plot = [0,0,0,0,0,0,0,0,0]
      }
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
    
    const plot = []
    const [audioURL, setURLaudio] = useState("https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav")
    const [HR, setHR]  = useState(80)
    const [Duration, setDuration] = useState()
    const [startTime, setStartTime] = useState()
    const [SP02, setSPO2] = useState(98)
    const [playing, setPlaying] = useState(false)
    const [currentTime , setCurrentTime] = useState(0)
    const [data , setData] = useState({
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
      let [audio] =  useState(new Audio(audioURL))
      useEffect(()=>{
        console.log(ECG.length/Duration , 'test ')
        const interval = setInterval(()=>{
          const d = new Date();
          // random(plot,data,setData,currentTime,Duration)
          // if(playing){
          //   audio.play()
          // }
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
            <div className="flex justify-center mt-5 ">
            <div className=' bg-zinc-100 grid grid-cols-1 gap-5 md:w-5/6 shadow-lg outline-slate-200'>
            <div className="flex justify-center ">
            <img className="flex justify-center object-cover h-28 w-30 mt-2" src={bert} alt="Logo" />
            </div>
             
            <h1 className="text-center  text-2xl m-5">ข้อมูลผู้ป่วย ชื่อ คุณ โกลเด้น วิ่งเล่น  อายุ 9 สถานะ บลาๆๆ </h1>
            {/* <AudioPlayer
              autoPlay  
              src="https://file-examples.com/storage/fef456d9a1627440e9d1c9f/2017/11/file_example_WAV_2MG.wav"
              onPlay={e => console.log("onPlay")}
              // other props here
            /> */}
            <AudioPlayer
                autoPlay
                src= {audioURL}
                onListen ={e => {setCurrentTime(e.srcElement.currentTime) 
                
                random(plot,data,setData,currentTime,Duration)
                
                
                }}
                onPlay={e => {
                  setDuration(e.srcElement.duration)
                  setCurrentTime(e.srcElement.currentTime)
                }
                }
                onSeeked={e => {
                  setCurrentTime(e.srcElement.currentTime)
                }}
                // other props here
              />
              <p>
             Current Time :  {currentTime} s
              <span> </span>
             Duration : {Duration} s
              </p>
         
            
          <div className="grid grid-cols-5 mb-2" >
              <div className="grid col-span-4 mb-2" >
                <div className='bg-black'>
                  <div className='bg-black'>
                      <Line height="200px" options={options} data={data} />            
                  </div>
                      <div className='bg-black'>
                      <Line height="200px" options={options} data={data} />
                      </div>
            
                   </div>
            
                </div>
                <div className="grid grid-rows-5 grid-flow-col gap-4" >
                <div className='bg-green-200 text-center align-middle border-2 '>
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
            </div>
            <div className="grid grid-cols-5 gap-4 mb-10" >
                  <div className=' bg-green-200 text-center  border-10 py-5 '> <h1> Record  </h1> </div>
                  <div className=' bg-green-200 text-center  border-10 py-5 '> <h1> Freeze </h1> </div>
                  <div className=' bg-green-200 text-center  border-10 py-5 '> <h1> Heart </h1> </div>
                  <div className=' bg-green-200 text-center  border-10 py-5 '> <h1> Lung </h1> </div>
                  <div className=' bg-green-200 text-center  border-10 py-5 '> <h1> EKG </h1> </div>
            </div>
       
          </div>
            
       
            </div>
            </div>
      
    )
}


