import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const AboutPage = () => {

  return (
    
    <div className="home-container">
    <div className="sidebar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Log Out</Link>
    </div>
    <div  className="content">
      <div className="aboutHeaderContainer">
        <h1 className='aboutHeader'>About Me</h1>
      </div>
      

      <div className='aboutDiv'>
        <div className='aboutIntroContainer'>
          <h2 className='aboutIntro'>Name: </h2>
          <p>Shen Jeuz D. Herrera</p>
          <h2>Section: </h2>
          <p>IT32S1</p>
          <h2>Program: </h2>
          <p>BSIT</p> 
        </div>
      </div>
     
    </div>
    </div>


  );
};

export default AboutPage;
