import React, { useEffect, useState } from 'react'

export default function Unmount() {
    const[counter,setCounter]=useState(1);
    
    useEffect(()=>{
        console.log("Component mount edildi.");
        const timeInterval=setInterval(()=>{setCounter((counter)=>counter+1)},1000);
        return () => {
            clearInterval(timeInterval)
            console.log("Component UnMount Edildi.");
        }
    },[]);

    useEffect(()=>{
        console.log("Zaman güncellendi.");
    },[counter])
    
    return (
        <div>
        <h1>{counter}</h1>

        </div>
    )
}
