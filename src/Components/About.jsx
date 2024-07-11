import React from 'react';
import Skills from './Skills';
import { Tilt } from 'react-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import styles from '../styles.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            I'm <b>Vignesh Ashokan</b>, a passionate <b>Full Stack Developer</b> with a solid one year of hands-on experience in the dynamic realm of web and mobile development. My expertise spans a wide array of technologies, and I specialize in creating seamless, user-centric applications.
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>

       <h1 className='SkillsHeading'>Working Technologies</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Reactnative'/>
        <Skills skill='Node' />
        <Skills skill='MongoDb' />
        <Skills skill='Javascript' />
        <Skills skill='Typescript'/>
        <Skills skill='Tailwind' />
        <Skills skill='Python' />
        <Skills skill='Git'/>
        <Skills skill='Github'/>
        <Skills skill='Postgres'/>
        <Skills skill='Mysql'/>
        <Skills skill='Docker'/>

        
      </div>
     
    </section>
  )
}

export default About