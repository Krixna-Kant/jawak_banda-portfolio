import React from 'react';
import projectCSS from './../Projects/Project.module.css';
import star from './../../assets/star.png';
import project1 from './../../assets/project01.jpg';
import project2 from './../../assets/project02.jpg';
import project3 from './../../assets/project03.jpg';
import project4 from './../../assets/project04.jpg';
import project5 from './../../assets/project05.jpg';

function Project() {
  return (
    <div className={`${projectCSS.projectWrapper} section`}>
        <h1 className="section_title">
            Have A Wide Range of <br/> Creative Projects 
            <img src={star} alt=''/>
        </h1>

        <div className={projectCSS.projectContainer}>
            <div className={projectCSS.projectCard}>
                <img src={project1} alt=''/>
                <h3>Project1</h3>
                <button>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project2} alt=''/>
                <h3>Project2</h3>
                <button>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project3} alt=''/>
                <h3>Project3</h3>
                <button>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project4} alt=''/>
                <h3>Project4</h3>
                <button>View Now</button>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={project5} alt=''/>
                <h3>Project5</h3>
                <button>View Now</button>
            </div>
        </div>
    </div>
  )
}

export default Project