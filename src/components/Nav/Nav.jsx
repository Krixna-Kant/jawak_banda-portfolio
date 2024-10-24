import React, { useRef } from 'react';
import navCss from './../Nav/Nav.module.css';

function Nav() {
  const menu = useRef();

  const handler = () => {
    menu.current.classList.toggle(navCss.activeNav);
  };

  return (
    <nav className={navCss.nav}>
      <div className={navCss.logo}>
        <a href='/'>Jawak</a>
      </div>
      <ul ref={menu} className={navCss.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#teams">Teams</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <i className='ri-menu-2-line' id={navCss.bars} onClick={handler}></i>
    </nav>
  );
}

export default Nav;
