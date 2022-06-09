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
//BsSnow
import { IoSnow, IoHeart, IoSave, IoCloudyOutline,IoPulseOutline, IoFolderOutline } from "react-icons/io5";
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
    // responsive: true,
    maintainAspectRatio: false ,
    animation : {
      duration : 0
    },
    y:
      {
        min: 0.7,
        max: 1,
        stepSize: 0.05,
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
const random = (plot,data,setData,currentTime,duration,setHR,setSPO2)=> {
      plot = []
      
      let step = ECG.length / duration
      console.log(ECG.length)
      let next_step =  currentTime * step
      console.log(next_step,next_step+step)

      if(!next_step){
        next_step = 0 
      }
      plot = ECG.slice(next_step,next_step + 200 )
      let hr  = Math.floor(Math.random() * (60 - 65) ) + 65;
      let sp02  = Math.floor(Math.random() * (100 - 98) ) + 98;
      setHR(hr)
      setSPO2(sp02)
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
    const [audioURL, setURLaudio] = useState("https://www.ee.columbia.edu/~dpwe/sounds/music/africa-toto.wav")
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
        document.body.style.backgroundColor = "black"
      }, [])
  
    return(
      <div style={{backgroundColor: 'blue'}}> 
        <div className=" bg-zinc-100 md:w-full shadow-lg outline-slate-200 rounded-lg  bg-gradient-to-r from-slate-800 to-slate-900   " >
        <div className='grid grid-rows-7 grid-flow-col gap-2'>            
              <div className='row-span-6 my-4 mx-2'>
                <div className='cols-span-3 rounded-lg border-2 bg-gradient-to-r from-zinc-100 to-zinc-200 text-center'>
                    <div className='grid grid-cols-2 pb-2'>
                    <div className='my-2'>           
                    <p className='text-left mx-5 pt-2'>ชื่อ  <span className='font-extrabold text-yellow-500'>คุณ โกลเด้น แทะมือ</span> </p>    
                    <p className='text-left mx-5 '>อายุ <span className='font-extrabold text-yellow-500'>1.2</span>  </p> 
                    <p className='text-left mx-5 '>น้ำหนัก  <span className='font-extrabold text-yellow-500'>18</span> หมู่เลือด <span className='font-extrabold text-yellow-500'>O</span> </p> 
                    </div>  
                    <div className='text-left my-2'>
                    <p>Current Time :  {currentTime} s<span> </span>
                    Duration : {Duration} s
                      </p>
                    <p className='text-left mx-5 '>รายละเอียด <span className='font-extrabold text-yellow-500'>หิวข้าว</span></p> 
                    <p className='text-left mx-5 '>หมอผู้ดูแล  <span className='font-extrabold text-yellow-500'>หมอกล้วย</span> </p> 
                    </div>
                    </div>
                    </div>
                    <div className='bg-gradient-to-r from-slate-800 to-slate-900 ' autoFocus>
                      <Line height="200px" options={options} data={data} />            
                      </div>
                  <div className='bg-gradient-to-r from-slate-800 to-slate-900 '>
                      <Line height="200px" options={options} data={data} />
                  </div>
                <div className='grid grid-cols-5 gap-2'>
                      <div className='bg-gradient-to-r from-amber-500 to-white hover:from-rose-900 to-pink  drop-shadow-md text-center mt-2  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                      <div className='flex justify-center'> 
                      <div className=' hover:animate-ping'>
                      <IoFolderOutline   size={30} className='my-3  text-black ' />  
                      </div>
                      <div>
                      <p className='my-2  font-extrabold text-slate-800 text-3xl '>  <span>&nbsp;</span> RECORD</p></div>
                      </div>
              </div>      
                <div className='bg-gradient-to-r from-cyan-200 to-white hover:from-sky-900 drop-shadow-md text-center mt-2  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                      <div className='flex justify-center'> 
                      <div>
                      <IoSnow size={30} className=' mt-3 animate-spin' />  
                      </div>
                      <div>
                      <p className='mt-2 font-extrabold text-slate-800 text-3xl '>  <span>&nbsp;</span> FREEZE</p></div>
                      </div>
              </div>
              <div className='bg-gradient-to-r from-red-200 to-white drop-shadow-md hover:from-pink-400 text-center mt-2  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                      <div className='flex justify-center text-rose-500 '> 
                      <div>
                      <IoHeart size={30} className='mt-3 animate-ping '  />  
                      </div>
                      <div>
                      <p className='mt-2 font-extrabold text-slate-800 text-3xl '>  <span>&nbsp;</span> Heart</p></div>
                      </div>
              </div>
              <div className='bg-gradient-to-r from-orange-200 to-white drop-shadow-md text-center mt-2 hover:from-yellow-400  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                      <div className='flex justify-center text-rose-500 '> 
                      <div>
                      <IoCloudyOutline size={30} className='mt-3 animate-ping '  />  
                      </div>
                      <div>
                      <p className='mt-2 font-extrabold text-slate-800 text-3xl '>  <span>&nbsp;</span> Lung</p></div>
                      </div>
              </div>        
              <div className='bg-gradient-to-r from-orange-200 to-white drop-shadow-md text-center mt-2  hover:from-orange-400  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                      <div className='flex justify-center text-rose-500 '> 
                      <div>
                      <IoPulseOutline size={30} className='mt-3 '  />  
                      </div>
                      <div>
                      <p className='mt-2 font-extrabold text-slate-800 text-3xl '>  <span>&nbsp;</span> EKG </p></div>
                      </div>
              </div>     
                </div>
                </div>
                <div className='bg-gradient-to-r from-cyan-200 to-white drop-shadow-md text-center my-3 mr-5  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Pulse Rate (BPM) </h1></div>
                <div><h1 className=' mt-2  font-extrabold text-slate-800 text-5xl '>{HR}</h1></div>
              
                </div>
                <div className='bg-gradient-to-r from-red-200 to-white drop-shadow-md text-center border-2 mr-5 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-red-500 to-pink-500'>SP02 (%) </h1></div>
                <div><h1 className=' mt-2 font-extrabold text-slate-800 text-5xl '>{SP02}</h1></div>
              
                </div>
                <div className='bg-gradient-to-r from-teal-200 to-white drop-shadow-md text-center mt-2 mr-5  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-emerald-500 to-teal-300'> RR (S) </h1></div>
                <div><h1 className=' mt-2  font-extrabold text-slate-800 text-5xl '>74</h1></div>
                </div>
                <div className='bg-gradient-to-r from-green-200 to-white drop-shadow-md text-center mt-2 mr-5 border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'> NIBP (mmHg) </h1></div>
                <div className='grid grid-cols-2 mx-2 '> 
                  <div><h1 className=' mt-2  font-extrabold text-slate-800 text-5xl '>74</h1></div>
                  <div><h1 className=' mt-2  font-extrabold text-slate-800 text-5xl '>128</h1></div>
                </div>
                </div>

                <div className='bg-gradient-to-r from-lime-200 to-white drop-shadow-md text-center mt-2 mr-5 border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-lime-500 to-green-500'> Temperature (°C) </h1></div>
                <div><h1 className=' mt-2 font-extrabold text-slate-800 text-5xl '>36.28</h1></div>
                </div>
                <div className='bg-gradient-to-r from-zinc-200 to-white drop-shadow-md text-center mb-5 mr-5   border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-green-500 to-lime-600 '> PLAYBACK </h1></div>
                <div className='mb'>
                <AudioPlayer
                autoPlay
                src= {audioURL}
                onListen ={e => {setCurrentTime(e.srcElement.currentTime) 
                random(plot,data,setData,currentTime,Duration,setHR,setHR)      
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
                </div>
               
        </div>  
      </div>      
    </div>
  </div>
    )
}


