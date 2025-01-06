//import React from "react";
import "../../assets/css/NavBar.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

var SignUp = () => {
    var navigate = useNavigate();
  const [FName, SetFName] = useState("");
  const [LName, SetLName] = useState("");
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");

  var signup = async (event) => {
    event.preventDefault();
    var req = axios.post("http://localhost:3000/signup", {
      firstName: FName,
      lastName: LName,
      email: email,
      password: password
    });
    console.log(req);
    navigate('/login');
  };
  return (
    <div className='form-box'>
      <form style={{padding:5}} onSubmit={signup}>
      <h1>Sign Up</h1>
        <label htmlFor='Fname'>First Name: </label>
        <input
          type='text'
          id='FName'
          placeholder='Enter your First name'
          onChange={(e) => {
            SetFName(e.target.value);
          }}
        />
        <br />
        <label htmlFor='Lname'>Last Name: </label>
        <input
          type='text'
          id='LName'
          placeholder='Enter your Last name'
          onChange={(e) => {
            SetLName(e.target.value);
          }}
        />
        <br />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          id='email'
          placeholder='Enter your Email'
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor='pass'>Password: </label>
        <input
          type='password'
          id='pass'
          placeholder='Enter your password'
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
        />
        <br />
        <button type='submit'>Sign Up </button>
      </form>
    </div>
  );
};
export default SignUp;