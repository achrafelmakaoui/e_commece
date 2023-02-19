import React, { useEffect, useRef } from 'react'
import './Vedio.css'
import vedio from '../pictures/airforcevd.mp4'

const Vedio = () => {
        const videoRef = useRef(null)
      
        useEffect(() => {
          if (videoRef.current) {
            videoRef.current.play()
          }
        }, [])
        const handleVideoEnded = () => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0
              videoRef.current.play()
            }
          }
          
  return (
    <div className='vedio-bg'>
        <video width='100%' height='100%' autoplay muted playsinline ref={videoRef} onEnded={handleVideoEnded}>
           <source src={vedio} type="video/mp4"/>
       </video>
    </div>
  )
}

export default Vedio