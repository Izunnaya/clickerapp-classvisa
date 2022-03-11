import React from 'react';
import { useState } from 'react';

 export default function Button() {
     const [value, setValue] = useState(0)
   
    return (
        <>
        <div>
            <p>{value}</p>            
            <button className = 'btn' onClick={() => setValue(value + 1)}> HEY CLICK ME! </button>
            </div>
            </>
    );
 }
