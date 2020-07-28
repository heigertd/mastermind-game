import React from 'react'
import './style.css'

export default function Results() {
    return (
        <div>
            <div className= 'flexResults'>
                <div id="r0" className="resultDot"></div>
                <div id= "r2" className="resultDot"></div>
            </div>
            <div className='flexResults'>
                <div id="r1" className="resultDot"></div>
                <div id="r3" className="resultDot"></div>
            </div>
        </div>
    )
}
