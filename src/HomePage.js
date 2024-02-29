import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="sidebar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Log Out</Link>
      </div>
      <div className="chat-container">
        <h1>Welcome to Shen's Home Page</h1>
        <p>Feel free to explore the options on the sidebar.</p>
      </div>
    </div>
  );
};

export default HomePage;
