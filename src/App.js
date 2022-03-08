import React, { useEffect, useReducer, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import DisplayState from "./Components/DisplayState/DisplayState";
import {reducer} from './Context/LoginContext/LoginContext'
import { AuthContext } from "./Context/AuthContext/AuthContext";
import AuthState from './Context/AuthContext/AuthState'
import Record from "./Components/Record/Record";
import Peer from './Peer/Peer'
import StreamingList from "./Components/Streaming/StreamingList";
import RecorderPlay from './Components/Record/RecorderPlay'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
var Socket_ID = ''
setInterval(()=>
{
    if(Peer){
        //console.log('display',Peer[0])
        Socket_ID = Peer[0] 
    }

},5000)

export default function App() {
  const screen1 = useFullScreenHandle();
  const [loginState, loginDispatch] = useReducer(reducer, true)
  useEffect(()=>{
    screen1.enter()
  },[])
  return (
  

  
  
    <AuthState>

    <Router>
   
      <FullScreen handle={screen1}>
      <Navbar/>
      <logginContext.Provider value ={{loginState, loginDispatch}} >
      <Routes>  
     
          <Route index element={ <Home /> } />
          <Route exact path="/docss" element={ <Docs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/main" element={<DisplayState />}/>
          <Route exact path="/" element={<Docs />} />
          <Route exact path= "/record" element={<Record />}/>
          <Route exact path="/stream" element={<StreamingList/>} />
          <Route exact path="/record/views" element={<RecorderPlay/>}/>
      </Routes>
      </logginContext.Provider>
      </FullScreen>
    </Router>
    
    </AuthState>
    

  );
}


function Home() {
  return <h2>Contact</h2>;
}
function Contact() {
  return <h2>Contact</h2>;
}

function Main() {
  return <h2> Main </h2>;
}
function Docs() {
  return <h2>Document</h2>;
}
const logginContext = React.createContext();
export {logginContext}