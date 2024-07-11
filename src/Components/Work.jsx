import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import zzLogo from '../assets/zzlogo.jpeg';

export default function Work() {
  const workExperience = [
    {
      company: 'Zeal Zoft',
      position: 'Full Stack Developer',
      date: 'June 2023 - Present',
      description: `Developing and maintaining web & Mobile applications using React js, React Native and  other related technologies.
Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.
Implementing responsive design and ensuring cross-browser compatibility.
Participating in code reviews and providing constructive feedback to other developers`
    },
   
   
  ];

  return (
    <section id='work' className='section'>
      <VerticalTimeline className="custom-timeline">
        {workExperience.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.2)', // Adjust transparency and color as needed
                color: '#fff', 
                backdropFilter: 'blur(10px)' // Glassmorphism effect
              }}           contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            date={experience.date}
            icon={<img src={zzLogo} alt="Zeal Zoft Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />}
           
            style={{
              marginLeft: index % 2 === 0 ? '-20px' : '20px',
              marginRight: index % 2 === 0 ? '20px' : '-20px',
              animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`,
              opacity: 0
            }}
          >
            <h3 className="vertical-timeline-element-title">{experience.position}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <div className="vertical-timeline-element-description">
              {experience.description.split('.').map((point, idx) => (
                <li style={{lineHeight:2}} key={idx}>{point.trim()}</li>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
