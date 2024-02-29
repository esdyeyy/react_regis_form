import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    
    <div className="home-container">
    <div className="sidebar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Log Out</Link>
    </div>
    <div>
        <h1>About Us</h1>
      <p>{loremIpsum}</p>
    </div>
    </div>


  );
};

export default AboutPage;
