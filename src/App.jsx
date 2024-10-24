import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Project from './components/Projects/Project';
import Testimonial from './components/Testimonials/Testimonial';
import Team from './components/Teams/Team';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Nav />
      <div id="home">
        <Header />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="teams">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
