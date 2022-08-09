import React from "react";
import VmedRecorder from './RecorderVMED'

import uuid from 'react-uuid'

export default function Record(){
    return(
        <div className="grid grid-cols-1 gap-4 mt-10 pt-10" >

        <VmedRecorder value={uuid()} url={'/record/views'}/>
        <VmedRecorder value={uuid()} url={'/record/views2/lung'}/>
        <VmedRecorder value={uuid()} url={'/record/views'}/>
        <VmedRecorder value={uuid()} url={'/record/views'}/>
        <VmedRecorder value={uuid()} url={'/record/views'}/>
        </div>
       
    )
}