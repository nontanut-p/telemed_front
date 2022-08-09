import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { csv } from 'd3-request';
import url_i from '../../data/i.csv';
import url_ii from '../../data/ii.csv';
import url_iii from '../../data/iii.csv';
import url_avR from '../../data/vra.csv';
import url_avL from '../../data/vrl.csv';
import url_avF from '../../data/vrf.csv';
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
    responsive: true,
    maintainAspectRatio: false ,
    animation : {
      duration : 0
    },
    // y:
    //   {
    //     min: 80,
    //     max: 250,
    //     stepSize: 0.1,
    //   },
      x:
      {
        min: 0,
        max: 2000,
        stepSize: 1,
      },
    plugins: {
      legend: {
        display: false,
     },

    },
  };
let ECG_i = []
let ECG_ii = []
let ECG_iii = []
let ECG_avR = []
let ECG_avL = []
let ECG_avF = []
let labels = []
    
let bert = 'https://www.perfectpedigreethailand.com/uploads/5/2/5/4/52548193/golden-retriever-p_1_orig.jpg'
var i = 0
const random = (plot,data,setData_i,currentTime,duration,setHR,setSPO2,setData_ii,setData_iii,setData_avR,setData_avL,setData_avF)=> {
      plot = []
      let plot_ii = []
      let plot_iii = []
      let plot_avR = []
      let plot_avL = []
      let plot_avF = []
      let step = 150 //ECG_i.length / duration
      console.log(labels.length, 'labels')
      let next_step =  currentTime * step
      console.log(next_step,next_step+step)
      if(!next_step){
        next_step = 0 
      }
      plot = ECG_i.slice(next_step,next_step + 3000 )
      plot_ii = ECG_ii.slice(next_step,next_step + 3000 )
      plot_iii = ECG_iii.slice(next_step,next_step + 3000 )
      plot_avR = ECG_avR.slice(next_step,next_step + 3000 )
      plot_avL = ECG_avL.slice(next_step,next_step + 3000 )
      plot_avF = ECG_avF.slice(next_step,next_step + 3000 )
      labels = ECG_avF.slice(next_step,next_step + 3000 )
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
              label: "ECG",
              data: plot,
              borderColor: 'rgb(255, 0, 0)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        };
      setData_i(data)
      data = {
        labels,
          datasets: [
            {
              label: "ECG",
              data: plot_ii,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        };
        setData_ii(data)
      data = {
        labels,
          datasets: [
            {
              label: "ECG",
              data: plot_iii,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        };
        setData_iii(data)
      data = {
        labels,
          datasets: [
            {
              label: "ECG",
              data: plot_avR,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        };
        setData_avR(data)
      data = {
        labels,
          datasets: [
            {
              label: "ECG",
              data: plot_avL,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        };
        setData_avL(data)    
      data = {
        labels,
          datasets: [
            {
              label: "ECG",
              data: plot_avF,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        };
        setData_avF(data)      
}


export default function RecorderPlay(){
    const navigate = useNavigate();
    const plot = []
    const [audioURL, setURLaudio] = useState("https://www.ee.columbia.edu/~dpwe/sounds/music/africa-toto.wav")
    const [HR, setHR]  = useState(80)
    const [Duration, setDuration] = useState()
    const [startTime, setStartTime] = useState()
    const [SP02, setSPO2] = useState(98)
    const goToLung = (e)=>{
      e.preventDefault()
      navigate('/record/views/lung')
     
  }
    const [playing, setPlaying] = useState(false)
    const [currentTime , setCurrentTime] = useState(0)
    const [data_i , setData_i] = useState({
      labels,
        datasets: [
          {
            data: plot,
            borderColor: 'rgb(255, 50, 50)',
            pointRadius: 0,
            backgroundColor: 'rgba(0, 0, 0, 1)',
          },
      
        ],
      })
      const [data_ii , setData_ii] = useState({
        labels,
          datasets: [
            {
              data: plot,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        })  
      const [data_iii , setData_iii] = useState({
        labels,
          datasets: [
            {
              data: plot,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        })       
      const [data_avF , setData_avF] = useState({
        labels,
          datasets: [
            {
              data: plot,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        })
      const [data_avL , setData_avL] = useState({
        labels,
          datasets: [
            {
              data: plot,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        })   
      const [data_avR , setData_avR] = useState({
        labels,
          datasets: [
            {
              data: plot,
              borderColor: 'rgb(255, 50, 50)',
              pointRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
        
          ],
        }) 

      
    let [audio] =  useState(new Audio(audioURL))
    useEffect(()=>{
      csv(url_i, function(err, data) {
        console.log(data.length)
        console.log(data[200])
        for(i = 0; i< data.length; i++){
          // // let obj1= JSON.stringify(data[i])
          // let obj2= JSON.parse(obj1)
          ECG_i.push(Object.values(data[i])[0])
         
        }
        
       })
    csv(url_ii, function(err, data) {
        console.log(data.length)
        console.log(data[200])
        for(i = 0; i< data.length; i++){
          ECG_ii.push(Object.values(data[i])[0])
         
        }
       })   
       csv(url_iii, function(err, data) {
        console.log(data.length)
        console.log(data[200])
        for(i = 0; i< data.length; i++){
          ECG_iii.push(Object.values(data[i])[0])
         
        }
       })  
       csv(url_avL, function(err, data) {
        console.log(data.length)
        console.log(data[200])
        for(i = 0; i< data.length; i++){
          ECG_avL.push(Object.values(data[i])[0])
         
        }
       }) 
       csv(url_avR, function(err, data) {
        console.log(data.length)
        console.log(data[200])
        for(i = 0; i< data.length; i++){
          ECG_avR.push(Object.values(data[i])[0])
         
        }
       })  
       csv(url_avF, function(err, data) {
        console.log(data.length)
        console.log(data[200])
        for(i = 0; i< data.length; i++){
          ECG_avF.push(Object.values(data[i])[0])
         
        }
       })             
    },[])
                  
    return(
     
        <div className=" bg-zinc-100 md:w-full shadow-lg outline-slate-200  bg-gradient-to-r from-slate-100 to-slate-200   " >
        <div className='grid grid-rows-7 grid-flow-col gap-1'>            
              <div className='row-span-6 my-2 mx-2'>
                <div className='cols-span-3 rounded-xl 	border-2 border-slate-900 bg-gradient-to-r from-stone-50 to-stone-50 text-center'>
                    <div className='grid grid-cols-3 pb-2'>
                    <div className='my-2'>           
                    <p className='text-left mx-5'>ชื่อ  <span className='font-extrabold text-slate-900'>คุณ มาริโอ บาโลเตลลี</span> </p>    
                    <p className='text-left mx-5 '>อายุ <span className='font-extrabold text-slate-900'>65</span>  </p> 
                    <p className='text-left mx-5 '>น้ำหนัก  <span className='font-extrabold text-slate-900'>49.6</span> ส่วนสูง <span className='font-extrabold text-slate-900'> 182</span> </p> 
                    <p className='text-left mx-5 '>รายละเอียด <span className='font-extrabold text-slate-900'>เวียนศีรษะ </span></p> 
                    </div>  
                    <div className='text-left my-2 '>
                    <p className='text-left mx-5 '>หมายเลขประจำตัวผู้ป่วย <span className='font-extrabold text-slate-900'>112456 </span></p> 
                    <p className='text-left mx-5 '>โรคประจำตัว <span className='font-extrabold text-slate-900'>- </span></p>
                    <p className='text-left mx-5 '>การแพ้ยา <span className='font-extrabold text-slate-900'>- </span></p> 
                    <p className='text-left mx-5 '>ความดัน <span className='font-extrabold text-slate-900'>139/86 </span></p> 
                    </div>

                    <div className='text-left my-2 '>
                    <p className='text-left mx-5 '>หมอผู้ดูแล  <span className='font-extrabold text-slate-900'>นพ.วาเลนตีโน รอสซี</span> </p> 
                    <p className='text-left mx-5 '>ผู้เก็บข้อมูล  <span className='font-extrabold text-slate-900'>มาร์ค มาเกวซ</span> </p> 
                    {/* <p className='text-left mx-5 '>หมอผู้ดูแล  <span className='font-extrabold text-slate-900'>นพ.วาเลนตีโน รอสซี</span> </p> 
                    <p className='text-left mx-5 '>รายละเอียด <span className='font-extrabold text-slate-900'>เวียนศีรษะ </span></p> 
                    <p className='text-left mx-5 '>หมอผู้ดูแล  <span className='font-extrabold text-slate-900'>นพ.วาเลนตีโน รอสซี</span> </p>  */}
                    </div>
                    </div>
                    </div>
                    <div className='grid grid-rows-3 grid-flow-col '>
                    <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                        <h1 className='mt-5 font-extrabold px-1'>|</h1>
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                        <h1 className='mt-5 font-extrabold px-1'>||</h1>
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                        <h1 className='mt-5 font-extrabold px-1'>|||</h1>
                      </div>
                     <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                      <Line height="200px" options={options} data={data_i} /> 
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200 '>
                      <Line height="200px" options={options} data={data_ii} />   
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200 '>
                      <Line height="200px" options={options} data={data_iii} />   
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                        <h1 className='mt-5 font-extrabold px-1'>aVL</h1>
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                        <h1 className='mt-5 font-extrabold px-1'>aVR</h1>
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                        <h1 className='mt-5 font-extrabold px-1'>aVF</h1>
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200 '>
                      <Line height="200px" options={options} data={data_avR} /> 
                      </div>
                      <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                      <Line height="200px" options={options} data={data_avL} />  
                      </div>
                       <div className='bg-gradient-to-r from-slate-200 to-slate-200  '>
                      <Line height="200px" options={options} data={data_avF} />  
                      </div>
                    </div>
           
                <div className='grid grid-cols-6 gap-2'>
                </div>
                </div>
                <div  onClick={goToLung} className='bg-red-500  hover:bg-sky-700  drop-shadow-md text-center my-3 mr-5  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                
                <div>
                  <h1 className='mt-5 font-extrabold text-slate-100 text-4xl  '>
                  ECG </h1>
                  
                  </div>
              
                </div>
                <div className='bg-gradient-to-r from-cyan-50 to-white drop-shadow-md text-center my-3 mr-5  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-red-600 to-red-700'>Pulse Rate (BPM) </h1></div>
                <div><h1 className='mt-2  font-extrabold text-slate-800 text-5xl '>{HR}</h1></div>
              
                </div>
                <div className='bg-gradient-to-r from-cyan-50 to-white drop-shadow-md text-center border-2 mr-5 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-slate-800 to-slate-800'>SP02 (%) </h1></div>
                <div><h1 className=' mt-2 font-extrabold text-slate-800 text-5xl '>{SP02}</h1></div>
              
                </div>
                <div className='bg-gradient-to-r from-cyan-50 to-white drop-shadow-md text-center mt-2 mr-5  border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-slate-800 to-slate-800'> RR (S) </h1></div>
                <div><h1 className=' mt-2  font-extrabold text-slate-800 text-5xl '>74</h1></div>
                </div>
                <div className='bg-gradient-to-r from-cyan-50 to-white drop-shadow-md text-center mt-2 mr-5 border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-slate-800 to-slate-800'> Temperature (°C) </h1></div>
                <div><h1 className=' mt-2 font-extrabold text-slate-800 text-5xl '>36.28</h1></div>
                </div>             
                <div className='bg-gradient-to-r from-cyan-50 to-white drop-shadow-md text-center mt-2 mr-5 border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-slate-800 to-slate-800'> ECG STATUS </h1></div>
                <div className='text-center'> 
                  <div><h1 className=' mt-3  mx-4 font-extrabold text-red-600 text-3xl text-center '>MissBeat</h1></div>
                  
                </div>
                </div>

        
               
      </div>   
      <div className='bg-gradient-to-r from-cyan-50 my-2 to-white drop-shadow-md text-center mb-5 mr-5   border-2 rounded-lg border-black-500/100 text-blue-600/100'>
                <div><h1 className='font-extrabold text-white rounded-md bg-gradient-to-r from-slate-800 to-slate-800 '> PLAYBACK </h1></div>
                <div className='mb'>
                <AudioPlayer
                autoPlay
                src= {audioURL}
                onListen ={e => {setCurrentTime(e.srcElement.currentTime) 
                random(plot,data_i,setData_i,currentTime,Duration,setHR,setHR,setData_ii,setData_iii,setData_avR,setData_avL,setData_avF)      
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

    )
}


