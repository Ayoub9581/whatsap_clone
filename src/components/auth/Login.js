import React from 'react';
import { Button } from '@material-ui/core';
import './../../vendor/css/Login.css';

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          srcset=""
        />

        <div className="login__text">
          <h1>Sign in to Whatsapp </h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
