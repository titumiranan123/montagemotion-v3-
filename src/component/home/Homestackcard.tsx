'use client'
import React, { useEffect, useRef } from 'react';
import gsap  from "gsap"
const Homestackcard = () => {
const boxRef = useRef<HTMLDivElement>(null)
useEffect(()=>{
gsap.to(boxRef.current,{
    x:300,
    duration:2,
    delay:1,
    background:'red',
    borderRadius:"50%"
})
},[])
    return (
        <div>
            <div ref={boxRef} className='w-[200px] h-[400px]'> 

            </div>
        </div>
    );
};

export default Homestackcard;