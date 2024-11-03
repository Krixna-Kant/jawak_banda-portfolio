import React, { useState } from 'react';
import contactCSS from './../Contact/Contact.module.css';
import star from './../../assets/star.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolio-backend-gune.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.success); // Shows success message from backend
      } else {
        alert(result.error); // Shows error message from backend
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className={`${contactCSS.contactWrapper} section`}>
      <div className={contactCSS.content}>
        <h1 className='section_title'>
          Let's Start <br /> Project Together
          <img src={star} alt='' />
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
        <div className={contactCSS.socialWrapper}>
          <div className={contactCSS.detail}>
            <p>Contact Us on WhatsApp <span>+91 9267987570</span></p>
            <p>Send Us an Email <span>jawakbanda@gmail.com</span></p>
          </div>
          <div className={contactCSS.social}>
            <a href='https://www.instagram.com/jawak_banda/' target='_blank' rel='noopener noreferrer'>
            <i className='ri-instagram-line'></i>
            </a>
            <a href='https://wa.me/9267987570' target='_blank' rel='noopener noreferrer'>
            <i className='ri-whatsapp-line'></i>
            </a>
            <i className='ri-twitter-x-line'></i>
            <i className='ri-youtube-line'></i>
            <i className='ri-github-line'></i>
          </div>
        </div>
      </div>

      <div className={contactCSS.form}>
        <h2>Send Us A Message</h2>

        <form onSubmit={handleSubmit}>
          <div className={contactCSS.inputWrapper}>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              required
            />
          </div>
          <div className={contactCSS.inputWrapper}>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              required
            />
          </div>
          <div className={contactCSS.inputWrapper}>
            <input
              type='text'
              name='whatsapp'
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder='Your Whatsapp Number (Optional)'
            />
          </div>
          <div className={contactCSS.inputWrapper}>
            <input
              type='text'
              name='reason'
              value={formData.reason}
              onChange={handleChange}
              placeholder='Reason for Inquiry'
              required
            />
          </div>

          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            required
          ></textarea>

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
