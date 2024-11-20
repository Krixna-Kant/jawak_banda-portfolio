import React, { useState } from 'react';
import contactCSS from './../Contact/Contact.module.css';
import star from './../../assets/star.png';

function Contact() {
 
  return (
    <div className={`${contactCSS.contactWrapper} section`}>
      <div>
        <h1 className='section_title'>
          Let's Start Project Together
          <img src={star} alt='' />
        </h1>
        <p className={contactCSS.tagline}>
        "We make your business stand out, more profitable, and engaging."
        </p>
        <p className={contactCSS.followup}>Ready to connect? Share the following details with us to help us
        understand your project better:
        </p>
        <ul className={contactCSS.sampleFormat}>
          <li><strong>Name:</strong> [Your Full Name]</li>
          <li><strong>Project Type:</strong> [e.g., Website, App, etc.]</li>
          <li><strong>Message:</strong> [Describe your project or requirements]</li>
        </ul>
      </div>
      {/* Contact Details Section */}
        <div className={contactCSS.socialWrapper}>
          <div className={contactCSS.detail}>
            <p>Contact Us on WhatsApp <span>
              <a 
              href="https://wa.me/9267987570"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fdfde1', textDecoration: 'none' }}
              >
                +91 9267987570
                </a>
              </span>
            </p>
            <p>Send Us an Email <span>
              <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=jawakbanda@gmail.com"
               target="_blank"
               rel="noopener noreferrer"
               style={{ color: '#fdfde1', textDecoration: 'none' }}
              >
                jawakbanda@gmail.com
                </a>
              </span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className={contactCSS.social}>
            <a href='https://www.instagram.com/jawak_banda/' target='_blank' rel='noopener noreferrer'>
            <i className='ri-instagram-line'></i>
            </a>
            <a href='https://wa.me/9267987570' target='_blank' rel='noopener noreferrer'>
            <i className='ri-whatsapp-line'></i>
            </a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=jawakbanda@gmail.com' target='_blank' rel='noopener noreferrer'>
            <i className='ri-mail-line'></i>
            </a>
            <i className='ri-twitter-x-line'></i>
            <i className='ri-youtube-line'></i>
            <i className='ri-github-line'></i>
          </div>
        </div>
      {/* <div className={contactCSS.form}>
        <h2>Send Us A Message</h2>

      </div> */}
    </div>
  );
}

export default Contact;
