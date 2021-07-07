import React from 'react'
import './Background.scss'
import Wave from './wave.svg'

export default function Background() {
    return (
        <div className='background'>
            <img className='wave' src={Wave} alt='wave-svg'/>
        </div>
    )
}
