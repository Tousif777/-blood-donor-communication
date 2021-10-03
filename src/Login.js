import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://image.flaticon.com/icons/png/512/205/205916.png"
          alt=""
        />
      </div>
      <Button onClick={signIn} variant="contained">
        Sign in with google
      </Button>
    </div>
  );
};

export default Login;
