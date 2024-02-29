import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';
import SuccessPage from './SuccessPage';



const App = () => {
  const navigate= useNavigate(); 
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    username: '',
    number: '',
    date: '',
    address: '',
    email: '',
    password: '',
    password2: '',
    gender: 'male',
  });

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => {
      return { ...prevFormState, [name]: value };
    });
  };
  
  
  const setError = (element, message) => {
    const inputControl = element.parentElement;
  
    if (inputControl) {
      const errorDisplay = inputControl.querySelector('.error');
      if (errorDisplay) {
        errorDisplay.innerText = message;
      }
  
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
    }
  };
  
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
  
    if (inputControl) {
      const errorDisplay = inputControl.querySelector('.error');
      if (errorDisplay) {
        errorDisplay.innerText = '';
      }
  
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
    }
  };
  
  const isValidEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateInputs = () => {
    console.log('Inside validateInputs');
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const usernameInput = document.getElementById('username');
    const numberInput = document.getElementById('number');
    const dateInput = document.getElementById('date');
    const addressInput = document.getElementById('address');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');
  
    const firstnameValue = formState.firstname.trim();
    const lastnameValue = formState.lastname.trim();
    const usernameValue = formState.username.trim();
    const numberValue = formState.number;
    const dateValue = formState.date.trim();
    const addressValue = formState.address.trim();
    const emailValue = formState.email.trim();
    const passwordValue = formState.password.trim();
    const password2Value = formState.password2.trim();

    const genderInput = document.getElementById('gender');
    if (!genderInput.value) {
      setError(genderInput, 'Select a Gender!');
    } else {
      setSuccess(genderInput);
    }
	  if (firstnameValue === '') {
      setError(firstnameInput, 'First Name is required!');
    } else if (!/^[a-zA-Z ]+$/.test(firstnameValue)) {
      setError(firstnameInput, 'First Name can only contain letters');
    } else {
      setSuccess(firstnameInput);
    }
	  if (lastnameValue === '') {
		  setError(lastnameInput, 'Last Name is required!');
	  } else if (!/^[a-zA-Z]+$/.test(lastnameValue)) {
		  setError(lastnameInput, 'Last Name can only contain letters');
	  } else {
		  setSuccess(lastnameInput);
	  }
	  if (usernameValue === '') {
		  setError(usernameInput, 'Enter a Username!');
	  } else {
		  setSuccess(usernameInput);
	  }
	  if (addressValue === '') {
		  setError(addressInput, 'Enter your Address!');
	  } else {
		  setSuccess(addressInput);
	  }
	  if (dateValue === '') {
		  setError(dateInput, 'Select a Date!');
	  } else {
		  setSuccess(dateInput);
	  }
  
	  if (numberValue.length !== 11) {
		  setError(numberInput, 'Invalid Number');
	  } else {
		  setSuccess(numberInput);
	  }
  
	  if (emailValue === '') {
		  setError(emailInput, 'Email is required');
	  } else if (!isValidEmail(emailValue)) {
		  setError(emailInput, 'Provide a valid email address');
	  } else {
		  setSuccess(emailInput);
	  }
  
	  if (passwordValue === '') {
		  setError(passwordInput, 'Password is required');
	  } else if (passwordValue.length < 8) {
		  setError(passwordInput, 'Password must be at least 8 characters.');
	  } else {
		  setSuccess(passwordInput);
	  }
  
	  if (password2Value === '') {
		  setError(password2Input, 'Please confirm your password');
	  } else if (password2Value !== passwordValue) {
		  setError(password2Input, "Passwords don't match");
	  } else {
		  setSuccess(password2Input);
	  }
	  
    console.log('Before inputControls loop');
    let isValid = true;  // Declare isValid here
    const inputControls = document.querySelectorAll('.input-control');
    inputControls.forEach(inputControl => {
      console.log('Inside inputControls loop');
      if (!inputControl.classList.contains('success')) {
        console.log('Invalid inputControl:', inputControl);
        isValid = false;
      }
    });
    console.log('After inputControls loop');
  
    console.log('isValid:', isValid);
    return isValid;
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Before validateInputs');
    const isValid = validateInputs();
    console.log('After validateInputs, isValid:', isValid);
  
    if (isValid) {
      console.log('Before calling alertInputsValidation');
      alertInputsValidation();
      console.log('After calling alertInputsValidation');
  
      alert('Registration is completed!');
      console.log('Registration is completed!');
  
      console.log('Before navigation');
      navigate('/success'); 
      console.log('After navigation');
    }
  };
  
  
  

  const alertInputsValidation = () => {
    const inputControls = document.querySelectorAll('.input-control');
    let isValid = true;
  
    inputControls.forEach((inputControl) => {
      if (!inputControl.classList.contains('success')) {
        isValid = false;
      }
    });
  
    if (isValid) {
      alert('Registration is completed!');
      console.log('All inputs are valid!');
    } else {
      alert('Some inputs are invalid. Please check and correct them.');
      console.log('Some inputs are invalid. Please check and correct them.');
    }
  };
  

  return (
    <div className="container animate__animated animate__jackInTheBox">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className="row1">
          <div className="fnln-container">
            <div className="input-control col-sm">
              <label htmlFor="firstname">First Name:</label>
              <input id="firstname" name="firstname" type="text" value={formState.firstname} onChange={handleChange}/>
              <div className="error"></div>
            </div>
            <div className="input-control col-sm">
            <label htmlFor="username">Username:</label>
            <input id="username" name="username" type="text" value={formState.username} onChange={handleChange}/>
            <div className="error"></div>
          </div>
          </div>
          <div className="unNum-container">
          <div className="input-control col-sm">
              <label htmlFor="lastname">Last Name:</label>
              <input id="lastname" name="lastname" type="text" value={formState.lastname} onChange={handleChange}/>
              <div className="error"></div>
            </div>
          <div className="input-control col-sm">
            <label htmlFor="number">Phone Number:</label>
            <input id="number" name="number" type="number" value={formState.number} onChange={handleChange}/>
            <div className="error"></div>
          </div>
        </div>
        </div>

        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" value={formState.email} onChange={handleChange}/>
          <div className="error"></div>
        </div>
        <div className="row">
        <div className="input-control col-sm">
        <label htmlFor="gender">Select Gender:</label>
        <select
          className="form-select select"
          name="gender"
          id="gender"
          value={formState.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

          <div className="input-control col-sm">
            <label htmlFor="birthdate">Date of Birth:</label>
            <input id="date" name="date" type="date" value={formState.date || ''} onChange={handleChange}/>
            <div className="error"></div>
          </div>
        </div>
        <div className="input-control">
          <label htmlFor="address">Address:</label>
          <input id="address" name="address" type="text" value={formState.address} onChange={handleChange}/>
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={formState.password} onChange={handleChange}/>
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="password2">Confirm Password:</label>
          <input id="password2" name="password2" type="password" value={formState.password2} onChange={handleChange}/>
          <div className="error"></div>
        </div>
        <div className="checkBox">
          <div className="inputBox">
            <input
              id="termsAndConditions"
              name="termsAndConditions"
              type="checkbox"
              value="yes"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="labelContainer">
            <p>I agree to the terms and conditions.</p>
          </div>
        </div>
        <div className="termsLabel">
          <p>By creating an account, you AGREE with the terms and conditions.</p>
        </div>
        <button type="submit" id="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default App;