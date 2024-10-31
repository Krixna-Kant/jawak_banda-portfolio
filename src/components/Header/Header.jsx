// Simply remove the import for useRef
import React from 'react';
import headerCss from './Header.module.css';
import star from './../../assets/star.png';
import user1 from './../../assets/user1.png';
import user2 from './../../assets/user2.png';
import user3 from './../../assets/user3.png';
import headerIMG from './../../assets/header-img.png';
import arrow from './../../assets/arrow.png';
import Digitalstudio from './../../assets/Digitalstudio.png';

function Header() {
  const handleButtonClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

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
          Jawak, a full-service digital agency specializing in Web Design & Development, 2D & 3D Animation, Logo Design, and Video Editing.
        </p>
        
        <div className={headerCss.profiles}>
          <div className={headerCss.img}>
            <img src={user1} alt="User 1" />
            <img src={user2} alt="User 2" />
            <img src={user3} alt="User 3" />
          </div>
          <p>
            Working with Jawak transformed our brand’s digital presence.
          </p>
        </div>
        <img src={arrow} alt="Arrow" className={headerCss.arrow} />
        <button onClick={handleButtonClick}>Create with Jawak</button>
      </div>
      
      <div className={headerCss.headerIMG}>
        <img src={Digitalstudio} alt="Header Background" />
      </div>
    </div>
  );
}

export default Header;
