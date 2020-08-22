import React from 'react';
import { Button } from '@material-ui/core';
import './../../vendor/css/Login.css';
import { auth, provider } from './../../firebase';
import { actionTypes } from './../../reducer';
import { useStateValue } from './../../StateProvider';
const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
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
