import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import db from "../firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import firebase from "firebase";

function Data({ data, id }) {
  const user = useSelector(selectUser);
  const [message, setmessage] = useState("");

  const sendMessages = (e) => {
    e.preventDefault();
    db.collection("messages")
      .add({
        rname: data.displayname,
        uid: data.uid,
        message: message,
        name: user.displayName,
        photo: user.photo,
        email: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setmessage("");
      });
  };

  return (
    <div>
      <Card
        style={{
          marginBottom: 20,
        }}
      >
        <CardHeader
          avatar={<Avatar src={data.photo} className="sidebar_avatar" />}
          title={data.displayname}
          subheader={data.email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Name: {data.displayname}</p>
            <p>
              Blood group:<strong> {data.bloodgroup} </strong>
            </p>
            <p>
              Number: <strong> {data.number} </strong>
            </p>
            <p>
              Location: <strong> {data.location} </strong>
            </p>
            <Popup
              trigger={
                <Button variant="contained" color="secondary">
                  Contact
                </Button>
              }
              position="left"
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
                <TextField
                  id="outlined-multiline-static"
                  label="Your messsage"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  variant="outlined"
                />
                <Button
                  style={{ marginTop: "10px" }}
                  variant="contained"
                  color="primary"
                  onClick={sendMessages}
                >
                  Send
                </Button>
              </div>
            </Popup>
            ;
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Data;
