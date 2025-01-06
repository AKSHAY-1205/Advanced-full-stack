//import React from "react";
import "../../assets/css/NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

var Login = () => {
  var navigate = useNavigate();
  var [email, SetEmail] = useState("");
  var [password, SetPassword] = useState("");
  var login = async (event) => {
    event.preventDefault();
    var req = axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.message)
        var isLoggedIn = res.data.isLoggedIn;
        console.log(isLoggedIn)
        if(isLoggedIn){
            navigate("/");
      }
  })
    .catch((err) => console.log(err));
    console.log(req);
  };

  var navi = () =>{
    navigate("/signup");
  }

  return (
    <div style={{padding:5}} className='form-box' onSubmit={login}>
        <h1>Welcome Back!</h1>
        <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          id='email'
          onChange={(e) => SetEmail(e.target.value)}
        />
        <br />
        <label htmlFor='pass'>Password: </label>
        <input
          type='password'
          id='pass'
          onChange={(e) => SetPassword(e.target.value)}
        />
        <br />
        <button type='submit' value='Submit'>
          Login
        </button>
        <br />
        <button type="button" onClick={navi}>No account? Sign up</button>
      </form>
    </div>
  );
};
export default Login;
