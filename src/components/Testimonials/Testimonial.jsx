import React from 'react'
import testimonialCSS from './../Testimonials/Testimonial.module.css';

import star from './../../assets/star.png';
import { Swiper, SwiperSlide  } from 'swiper/react';


import user1 from './../../assets/user1.png';
import user2 from './../../assets/user2.png';
import user3 from './../../assets/user3.png';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Testimonial() {
  return (
    <div className={`${testimonialCSS.testimonialWrapper} section`}>
        <h1 className='section_title'>
            Clients are Always Satisfied <br/> With us
            <img src={star} alt="" />
        </h1>

        <Swiper
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        breakpoints={
            {
                0:{
                    slidesPerView: 1  
                },
                900:{
                    slidesPerView: 2
                }
            }
        }
        autoplay={
        {
            delay: 2500,   
        }
    }

        modules={[Autoplay]}
         className={testimonialCSS.swiper}>
            <SwiperSlide>
                <div className={testimonialCSS.swiperCard}>
                    <div className={testimonialCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                    </div>
                    <p>Excellent content! Engaging posts and posters that boosted our social media presence significantly.</p>
                    <div className={testimonialCSS.profile}>
                        <img src={user1} alt=''/>
                        <h3>Mr. Bhati <span>Bhati & Sons</span></h3>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.swiperCard}>
                    <div className={testimonialCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                    </div>
                    <p>Impressive animation! High-quality, user-engaging visuals that made our promotions truly stand out and captivate audiences.</p>
                    <div className={testimonialCSS.profile}>
                        <img src={user2} alt=''/>
                        <h3>Adorned Sports <span>adornedsports.com</span></h3>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.swiperCard}>
                    <div className={testimonialCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                    </div>
                    <p>Fantastic web redesign—modern, user-friendly, and effective! We’re seeing better engagement across the site.</p>
                    <div className={testimonialCSS.profile}>
                        <img src={user3} alt=''/>
                        <h3>Mr. Alex Martin <span>Fresh Digital Solutions</span></h3>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial