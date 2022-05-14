import bgd from '../img/bg-boost-desktop.svg'
import bgm from '../img/bg-boost-mobile.svg'
import useDeviceCheck from '../isMobile.js'
import React, {useRef, useEffect} from 'react'
import {Gs} from './comps'


function Dsp (){
    const {isMobile} = useDeviceCheck()
    const bgRef = useRef()

    useEffect(()=>{
        bgRef.current.style.backgroundImage = (isMobile) ? `url(${bgm})` : `url(${bgd})`
        bgRef.current.style.backgroundRepeat = 'no-repeat'
        bgRef.current.style.backgroundPosition = 'center'
        bgRef.current.style.backgroundSize = 'cover'
    },[isMobile])

    return (
      <div ref={bgRef} className="container-fluid vh-25 mt-2 background-no-repeat has-bg-image text-center w-100 py-5 bg-secondary">
       <h1>Boost your links today</h1>
        <Gs />
      </div>
    )
}

export default Dsp