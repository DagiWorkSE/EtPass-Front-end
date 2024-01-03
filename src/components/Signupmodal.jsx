import React, { useState } from "react";
import Modals from "./Modals";
import { Link, Router } from "react-router-dom";

import "../styles/homePageStyles.css";
import axios from "axios"; 
import { baseUrl } from "../util/constants";
import Transport from "../api/transport";
import { useNavigate } from 'react-router-dom';

const Signupmodal = () => {
  const [isLogin, setIsLogin] = useState(false);
const [errorMessage, setErrorMessage] = useState("");


const  [formData, setFormData] =useState({
  first_name:"",
  last_name:"",
  email:"",
  password:"",
  confirm_Password:"",
});

const handleInputChange = (e) => {
  console.log(formData);
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    
  });
};

const [loading, setLoading] = useState(false);
const handleSignup = async (e) => {
  e.preventDefault();
  try { 
      setLoading(true)
    // Call the signup API
    const response = await Transport.HTTP.signUp(formData);
    // const response = await axios.post("http://localhost:8000/auth/auth/signup",formData);
    // console.log("this is shit", response); // Log the response if needed
    setErrorMessage("Account created successfully. Check your email for verification.");
  } catch (error) {
    setErrorMessage("Signup failed. Please check your information and try again.");
    console.error("Signup failed lash", error);
    
    // Handle signup error, show a message, etc.
  }finally{
    setLoading(false);
  }
};





  const toggleModal = () => {
    setIsLogin(!isLogin);
  };


// const history = createBrowserHistory();
const navigate = useNavigate();

  // const history = useHistory();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleLoginInputChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const response = await Transport.HTTP.login(loginFormData);
    console.log("Login response:", response);
    console.log(response.data.access_token);
   
    sessionStorage.setItem("First Name",response.data.firstname);
    sessionStorage.setItem("access_token",response.data.access_token);
    // const { access_token, refresh_token, message } = response.data;
    // document.cookie = `refresh_token=${refresh_token}; HttpOnly; Secure; SameSite=None;`;
    // document.cookie = `access_token=${access_token}; HttpOnly; Secure; SameSite=None;`;
    if (response.status === 201) {
     navigate('/User');
    } else {
      console.log('Login faild')
    }
  } catch (error) {
    console.error("Signup failed:", error);
     setErrorMessage("Incorrect username or password. Please try again.");
  
  console.log(errorMessage);
  }finally {
    setLoading(false);
  }
};
  

  const signupForm = (
    <>
      <h3 className="text-center modal-title mb-4">Create an account</h3>
      <div className="mb-3">
        <label htmlFor="fullname" className="mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="first_name"
          className="form-control-h"
          placeholder="Enter Your First Name"
             onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="fullname" className="mb-2">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          className="form-control-h"
          placeholder="Enter Your Last Name"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="mb-2">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="form-control-h"
          placeholder="Enter email"
             onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control-h"
          placeholder="Enter password"
             onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="mb-2">
          Confirm Password
        </label>
        <input
          name="confirm_Password"
          type="password"
          className="form-control-h"
          placeholder="Enter password"
             onChange={handleInputChange}
        />
      </div>
      <div className="d-grid">
        <button type="submit" onClick={handleSignup} className="btn login-form-btn">
           {loading ? 'Loading please wait...' : 'Create An Account'}
        </button>
        
        <p className="text-center login-new pt-5">
          Already have an account?
          <Link onClick={toggleModal} style={{color:"#004A7F"}}> &nbsp; Login</Link>
        </p>
      </div>
    </>
  );

  const loginForm = (
    <>
      <h3 className="text-center modal-title mb-4">Login</h3>
      <div className="mb-3">
        <label htmlFor="email" className="mb-2">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="form-control-h"
          placeholder="Enter email"
          onChange={handleLoginInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control-h"
          placeholder="Enter password"
          onChange={handleLoginInputChange}
        />
      </div>
      <div className="d-grid">
          <button type="submit" onClick={handleLogin} className="btn login-form-btn">
          {loading ? 'Loading please wait...' : 'Login'}
        </button>
        <p className="text-center login-new pt-5">
          Don't have an account yet?
          <Link onClick={toggleModal} style={{color:"#004A7F"}}> &nbsp; Signup</Link>
        </p>
      </div>
    </>
  );

 const modalContent = (
    <div className="login-container">
      <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>
        {errorMessage}
      </div>
      {isLogin ? loginForm : signupForm}
    </div>
  );

  return <Modals title={isLogin ? "login" : "signup"} content={modalContent} />;
};

export default Signupmodal;
