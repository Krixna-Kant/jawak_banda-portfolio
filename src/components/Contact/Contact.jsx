import React from 'react'
import contactCSS from './../Contact/Contact.module.css'
import star from './../../assets/star.png'

function Contact() {
  return (
   <div className={`${contactCSS.contactWrapper} section`}>
    <div className={contactCSS.content}>
        <h1 className='section_title'>
            Let's Start <br/> Project Together
            <img src={star} alt=''/>
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>

        <div className={contactCSS.socialWrapper}>
            <div className={contactCSS.detail}>
                <p>Get Us a call <span>+63 126597878</span></p>
                <p>Send Us a Email <span>example@gmail.com</span></p>
            </div>
            <div className={contactCSS.social}>
                <i className='ri-instagram-line'></i>
                <i className='ri-facebook-line'></i>
                <i className='ri-twitter-x-line'></i>
                <i className='ri-youtube-line'></i>
                <i className='ri-github-line'></i>
            </div>

        </div>
    </div>
    <div className={contactCSS.form}>
        <h2>Send Us A Message</h2>

        <div className={contactCSS.inputWrapper}>
            <input type='text' placeholder='Your Name'/>
        </div>
        <div className={contactCSS.inputWrapper}>
            <input type='password' placeholder='Your Password'/>
        </div>
        <div className={contactCSS.inputWrapper}>
            <input type='s' placeholder='Your Subject'/>
        </div>

        <textarea placeholder='Message'></textarea>

        <button>Send Message</button>
    </div>
   </div>
  )
}

export default Contact