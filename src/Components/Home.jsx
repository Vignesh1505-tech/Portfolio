import React, { useEffect, useState } from 'react'
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Avatar from '../images/Avatar.jpg';
import Typed from './Typed';
import { Tilt } from 'react-tilt';
import styles from '../styles.module.css'; // Import your CSS file for styles


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function page() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(()=>{
    handleImageClick()
  },[])

  const handleImageClick = () => {
    setIsFlipped(true);
    setTimeout(() => setIsFlipped(false), 1000); // Reset back to initial state after 1000ms (1 second)
  };
  return (
    <div >
      <section id="home" className={styles.section}>
    <div className='HomePage'>

      <div className='HomeText'>
        <h1>Hi There!</h1>
        <h1>I'M <b>VIGNESH ASHOKAN</b></h1>
        <Typed/>   
      </div>

      <div>
          <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <div className={isFlipped ? `${styles.flipImage} ${styles.flipped}` : styles.flipImage}>
              <img src={Avatar} width={300} height={300} style={{borderRadius:"50%"}} className={styles.avatar} onClick={handleImageClick} />
            </div>
          </Tilt>
        </div>
      
      
    </div>
    </section>

  </div>
  )
}
