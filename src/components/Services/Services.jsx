import React from 'react';
import serviceCSS from './../Services/Service.module.css';
import star from './../../assets/star.png';
import imgArrow from './../../assets/arrow-right.svg';
import serviceBg from './../../assets/Service-bg.jpg';

function Services() {
  return (
    <div className={`${serviceCSS.ServiceWrapper} section`}>
      <h1 className='section_title'>
        We Provide A Effective <br /> Design Solutions
        <img src={star} alt='' />
      </h1>
      <div className={serviceCSS.servicCards}>
        <div className={serviceCSS.servicCard}>
          <i className='ri-shape-line'></i>
          <h2>Graphic Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <img src={imgArrow} alt='' />
        </div>
        <div className={serviceCSS.servicCard}>
          <i className='ri-exchange-2-line'></i>
          <h2>UI/UX Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <img src={imgArrow} alt='' />
        </div>
        <div className={serviceCSS.servicCard}>
          <i className='ri-terminal-box-line'></i>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <img src={imgArrow} alt='' />
        </div>
        <div className={serviceCSS.servicCard}>
          <i className='ri-meteor-line'></i>
          <h2>Motion Graphics</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <img src={imgArrow} alt='' />
        </div>
      </div>

      <div className={serviceCSS.Title}>
        <h3>
          We Make Your <img src={star} alt='' />
          <br /> Business Stand out
        </h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ex.</p>
      </div>

      <div className={serviceCSS.service_bottom_container}>
        <div className={serviceCSS.serviceImg}>
          <img src={serviceBg} alt='' />
        </div>
        {/* Corrected Class Name */}
        <div className={serviceCSS.service_contentWrapper}> 
          {/* Ensure this matches your CSS module */}
          <div className={serviceCSS.content}>
            <h2>15+</h2>
            <p>Year of Experience</p>
          </div>
          <div className={serviceCSS.content}>
            <h2>120</h2>
            <p>Success Projects</p>
          </div>
          <div className={serviceCSS.content}>
            <h2>100%</h2>
            <p>Client Happiness Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;