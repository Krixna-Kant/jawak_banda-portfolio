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
        <a href='#'>Jawak</a>
      </div>
      <ul ref={menu} className={navCss.menu}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Testimonials</a></li> {/* Fixed typo from "Testimonals" */}
        <li><a href='#'>Teams</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <button onClick={handler}>Contact Us</button>
      <i className='ri-menu-2-line' id={navCss.bars} onClick={handler}></i>
    </nav>
  );
}

export default Nav;