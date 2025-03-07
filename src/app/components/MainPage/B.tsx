'use client'

import { useState } from "react";

const B = () => {

    const [w, setW] = useState(0);
    const [h, setH] = useState(0);
    return <button className="absolute z-1000 top-4/5 w-1/10 h-1/10 bg-cyan-800" onClick={() => {setW(window.innerWidth); 
        setH(window.innerHeight)}}> {w} {h} </button>
}

export default B;
