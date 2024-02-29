import React from 'react';
import './App.css'; 
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="container animate__animated animate__jackInTheBox centered">
      <div className="success-icon">
        <span role="img" aria-label="success" className="check-icon">&#10004;</span>
      </div>
      <h1 className='success-text'>Success!</h1>
      <p className='success-desc'>Your registration was successful.</p>
      <Link to="/home">Go to Home</Link>
    </div>
  );
};

export default SuccessPage;
