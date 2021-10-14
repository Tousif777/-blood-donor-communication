import { Button, FormGroup, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import db from "../firebase";

const Addcomment = ({ key, postid }) => {
  const user = useSelector(selectUser);
  const [comment, setcomment] = useState([]);

  useEffect(() => {
    if (postid) {
      db.collection("posts")
        .doc(postid)
        .collection("new comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setcomment(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [postid]);

  const addcomment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postid).collection("comments").add({
      comment: comment,
      username: user.displayName,
      photoURL: user.photo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setcomment("");
  };

  return (
    <div>
      <FormGroup>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            style={{ width: 300 }}
            label="Add comment"
            variant="filled"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={addcomment}>
            Add comment
          </Button>
        </div>
      </FormGroup>
    </div>
  );
};

export default Addcomment;
