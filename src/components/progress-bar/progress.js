import { useEffect, useState } from "react";

const Progress = () =>{
    const width=60;
    const [animated,setAnimated]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setAnimated(width)
        }, 3000);
    })
    return (
        <div>
            <div class="outer">
                <div class="inner" style={{
                    width:`${animated}%`,
                    transform:"translateX(animated-100%)"
                }}
                role="progressbar"
                aria-valuenow={width}
                aria-valuemin="0"
                aria-valuemax="100">
                <span class="progress-text">{animated}%</span>
                </div>
            </div>
        </div>
    )
}
export default Progress;
