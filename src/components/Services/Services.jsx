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
          <i className='ri-meteor-line'></i>
          <h2>2D & 3D Video Animation</h2>
          <p>Engaging 2D & 3D Animations to Elevate Your Brand</p>
          {/* <img src={imgArrow} alt='' /> */}
        </div>
        <div className={serviceCSS.servicCard}>
          <i className='ri-terminal-box-line'></i>
          <h2>Web Solutions & Development</h2>
          <p>Empowering Brands with Custom Web Development Solutions</p>
          {/* <img src={imgArrow} alt='' /> */}
        </div>
        <div className={serviceCSS.servicCard}>
        <i className='ri-exchange-2-line'></i>
          <h2>Social Presence Development</h2>
          <p>Enhancing Brand Visibility by Managing Social Media Accounts</p>
          {/* <img src={imgArrow} alt='' /> */}
        </div>
        <div className={serviceCSS.servicCard}>
          <i className='ri-shape-line'></i>
          <h2>Digital Branding Solutions</h2>
          <p>Crafting unique brand visuals for impactful digital presence.</p>
          {/* <img src={imgArrow} alt='' /> */}
        </div>
      </div>

      <div className={serviceCSS.Title}>
        <h3>
          We Make Your <img src={star} alt='' />
          <br /> Business Stand out
        </h3>

        <p>Helping Your Business Shine in a Competitive Market</p>
      </div>

      <div className={serviceCSS.service_bottom_container}>
        <div className={serviceCSS.serviceImg}>
          <img src={serviceBg} alt='' />
        </div>
        {/* Corrected Class Name */}
        <div className={serviceCSS.service_contentWrapper}> 
          {/* Ensure this matches your CSS module */}
          <div className={serviceCSS.content}>
            <h2>2+</h2>
            <p>Year of Experience</p>
          </div>
          <div className={serviceCSS.content}>
            <h2>20+</h2>
            <p>Success Projects</p>
          </div>
          <div className={serviceCSS.content}>
            <h2>99%</h2>
            <p>Client Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;