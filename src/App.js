import React from "react";
import "./App.css";
import Main from "./Main";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return <div className="App">{user ? <Main /> : <Login />}</div>;
}

export default App;
