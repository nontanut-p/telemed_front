import React from "react";
import Streaming from "./Streaming";
import uuid from 'react-uuid'

export default function StreamingList(){
    return(
        <div className="grid grid-cols-1 gap-4 mt-10 pt-10" >

        <Streaming value={uuid()} />
        <Streaming value={uuid()}/>
        <Streaming value={uuid()}/>
        <Streaming value={uuid()}/>
        <Streaming value={uuid()}/>
        </div>
    )
}