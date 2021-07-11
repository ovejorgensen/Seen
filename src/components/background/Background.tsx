import React from 'react'
import './Background.scss'
import Wave from './wave.svg'

export default function Background(props:any) {
    if (props.wave){
        return (
            <div className='background'>
                <img className='wave' src={Wave} alt='wave-svg'/>
            </div>
        )
    }
    else return <div className='background'></div>
}
