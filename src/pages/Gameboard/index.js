import React from 'react'
import Row from '../../components/Row'
import Dots from '../../components/Dots'
import './style.css'

export default function Gameboard() {
    return (
        <div className = 'two-columns'>
            <div>
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
            </div>
            <div>
                <Dots />
                <Dots />
            </div>
        </div>
    )
}
