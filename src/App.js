import React, { useEffect, useReducer, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import DisplayState from "./Components/DisplayState/DisplayState";
import {reducer} from './Context/LoginContext/LoginContext'
import { AuthContext } from "./Context/AuthContext/AuthContext";
import AuthState from './Context/AuthContext/AuthState'
import Record from "./Components/Record/Record";
// import Peer from './Peer/Peer'
import StreamingList from "./Components/Streaming/StreamingList";
import RecorderPlay from './Components/Record/RecorderPlay'
import LungPlay from './Components/Record/LungPlay'
import LungPlayStream from './Components/Record/LungPlayStream'

export default function App() {
  const [loginState, loginDispatch] = useReducer(reducer, true)
  return (

    <AuthState>
    <Router>
      <Navbar/>
      <logginContext.Provider value ={{loginState, loginDispatch}} >
      <Routes>  
          <Route index element={ <Home /> } />
          <Route exact path="/docss" element={<Docs />} />
          <Route exact path="/contact" element={ <Contact />} />
          <Route exact path="/main" element={ <DisplayState />}/>
          <Route exact path="/" element={ <Docs />} />
          <Route exact path= "/record" element={ <Record />}/>
          <Route exact path="/stream" element={ <StreamingList/>} />
          <Route exact path="/record/views" element={ <RecorderPlay/>}/>
          <Route exact path="/record/views2/lung" element={ <LungPlayStream/>}/>
          <Route exact path="/record/views/lung" element={ <LungPlay/>} />
      </Routes>
      </logginContext.Provider>
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
  return <h2>Main </h2>;
}

function Docs() {
  return <h2>Document</h2>;
}
const logginContext = React.createContext();
export {logginContext}