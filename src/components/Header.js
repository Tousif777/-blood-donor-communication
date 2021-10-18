import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import db from "../firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const [messages, setmessages] = useState([]);
  const user = useSelector(selectUser);

  const classes = useStyles();
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#d32f2f" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blood donation
          </Typography>
          <Popup
            trigger={
              <Button variant="contained" color="secondary">
                Message
              </Button>
            }
            position="bottom"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              {messages.map((message) => (
                <div>
                  <p>
                    {message.message.uid === user.uid ? (
                      <p>
                        <b>{message.message.name}</b> --
                        {message.message.message}
                      </p>
                    ) : (
                      <p>You dont have any messages</p>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </Popup>

          <Button Link to="/adddoner" color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/adddoner"
            >
              became a doner
            </Link>
          </Button>
          <Button
            onClick={() => auth.signOut()}
            style={{ color: "white", marginLeft: "30px" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
