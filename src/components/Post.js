import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import db from "../firebase";
const Post = () => {
  const [post, setpost] = useState("");
  const user = useSelector(selectUser);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      post: post,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayname: user.displayName,
    });

    setpost("");
  };
  return (
    <div
      style={{
        display: "flex",
        marginTop: 20,
      }}
    >
      <TextField
        style={{ width: "365px" }}
        label="Add Post here"
        variant="outlined"
        onChange={(e) => setpost(e.target.value)}
        value={post}
      />
      <Button variant="contained" color="secondary" onClick={sendPost}>
        Add post
      </Button>
    </div>
  );
};

export default Post;
