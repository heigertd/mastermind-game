import React from 'react'
import Dots from '../Dots'
import Results from '../Results'
import './style.css'

export default function Row() {
    return (
        <div className = 'flexRow'>
            <Dots />
            <Results />
        </div>
    )
}
