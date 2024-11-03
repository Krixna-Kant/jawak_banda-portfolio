import React, { useState } from 'react';
import projectCSS from './../Projects/Project.module.css';
import star from './../../assets/star.png';
import project1 from './../../assets/project01.jpg';
import project2 from './../../assets/project02.jpg';
import project3 from './../../assets/project03.jpg';
import project4 from './../../assets/project04.jpg';
import project5 from './../../assets/project05.jpg';
import ReNuOil from './../../videos/ReNuOil.mp4';
import Grappl from './../../videos/Grappl.mp4';
import Ramayya_animation from './../../videos/Ramayya_animation.mp4';
import Ramayya2 from './../../videos/Ramayya2.mp4';
import Digital1 from './../../videos/Digital1.mp4';

function Project() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const openModal = (video) => {
        setVideoSrc(video);
        setModalOpen(true);
      };

      const closeModal = () => {
        setModalOpen(false);
        setVideoSrc('');
      };
    
  return (
    <div className={`${projectCSS.projectWrapper} section`}>
        <h1 className="section_title">
            Have A Wide Range of <br/> Creative Projects 
            <img src={star} alt=''/>
        </h1>

        <div className={projectCSS.projectContainer}>
            <div className={projectCSS.projectCard}>
                <img src={project1} alt=''/>
                <h3>Web Project 1</h3>
                <button onClick={() => openModal(ReNuOil)}>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project2} alt=''/>
                <h3>2d Animation Project</h3>
                <button onClick={() => openModal(Ramayya_animation)}>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project3} alt=''/>
                <h3>Web Project 2</h3>
                <button onClick={() => openModal(Grappl)}>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project4} alt=''/>
                <h3>Digital Branding Project</h3>
                <button onClick={() => openModal(Digital1)}>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project5} alt=''/>
                <h3>2d Animation Project</h3>
                <button onClick={() => openModal(Ramayya2)}>View Now</button>
            </div>
            <div>
              <h2 className={projectCSS.section2}>
                More Projects will be 
                <br/> added soon...
              </h2>
            </div>
        </div>

        {isModalOpen && (
        <div className={projectCSS.modal}>
          <div className={projectCSS.modalContent}>
            <span className={projectCSS.close} onClick={closeModal}>&times;</span>
            <video
              width="560"
              height="315" controls>
              <source src={videoSrc} type='video/mp4'/>
              Your browser does not support the video tag.
              </video>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project