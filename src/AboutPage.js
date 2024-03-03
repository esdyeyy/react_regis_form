import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const AboutPage = () => {
  const Introduction =
   "My name is Shen Jeuz D. Herrera, currently 20 years old. I am a third-year Information Technology Student from Technological Institute of the Philippines.";

  return (
    
    <div className="home-container">
    <div className="sidebar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Log Out</Link>
    </div>
    <div  className="content">
      <h1 className='aboutHeader'>About Me</h1>

      <div className='aboutDiv'>
        <div className='aboutIntroContainer'>
          <p className='aboutIntro'>{Introduction}</p>
        </div>
      </div>
     
    </div>
    </div>


  );
};

export default AboutPage;
