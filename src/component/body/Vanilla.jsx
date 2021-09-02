import Tilt from 'react-vanilla-tilt'
import React from 'react'

export default function Vanilla() {
    return (
        <div className="d-none">
            <Tilt options={{ scale: 2, speed: 300,"max-glare": 1 }}></Tilt>
        </div>
    )
}
