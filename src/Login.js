import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { Typography } from "@material-ui/core";
import Flash from "react-reveal/Flash";

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
      <Flash>
        <Typography variant="h4" component="h4">
          Give blood and keep the
          <b> World beating</b>
        </Typography>
      </Flash>
      ;
      <Button
        onClick={signIn}
        variant="contained"
        color="secondary"
        style={{ padding: "20px", marginBottom: "80px" }}
      >
        Sign in with google
      </Button>
    </div>
  );
};

export default Login;
