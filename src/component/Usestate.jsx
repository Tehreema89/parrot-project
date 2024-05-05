import React from 'react'
import { useState } from 'react';

const MyCounter = () => {

     const  [Counter,setCounter] = useState(0);

  return (
    <div>
        <h1>counter: {Counter} </h1>
    </div>
    
  )
}

export default MyCounter;
