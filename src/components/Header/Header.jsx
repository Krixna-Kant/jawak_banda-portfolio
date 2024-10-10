import React from 'react';
import headerCss from './Header.module.css';

import star from './../../assets/star.png';
import user1 from './../../assets/user1.png';
import user2 from './../../assets/user2.png';
import user3 from './../../assets/user3.png';
import headerIMG from './../../assets/header-img.png';
import arrow from './../../assets/arrow.png';

function Header() {
  return (
    <div className={`${headerCss.headerWrapper} section`}>
      <div className={headerCss.content}>
        <h1>
          A Creative
          <img src={star} alt="Star Icon" />
          <br />
          Digital Studio
        </h1>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis deserunt laudantium cumque
          dolor ducimus sunt neque asperiores dolore, totam pariatur consequatur laboriosam cupiditate alias aspernatur.
        </p>
        
        <div className={headerCss.profiles}>
          <div className={headerCss.img}>
            <img src={user1} alt="User 1" />
            <img src={user2} alt="User 2" />
            <img src={user3} alt="User 3" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit debitis eum
          </p>
        </div>
        <img src={arrow} alt="Arrow" className={headerCss.arrow} />
        <button>Create with Jawak</button>
      </div>
      
      <div className={headerCss.headerIMG}>
        <img src={headerIMG} alt="Header Background" />
      </div>
    </div>
  );
}

export default Header;