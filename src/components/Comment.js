import { Avatar, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import db from "../firebase";
import Moment from "react-moment";

function Comment({ postid }) {
  const [comments, setComments] = React.useState([]);
  useEffect(() => {
    db.collection("posts")
      .doc(postid)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
  }, [comments]);
  return (
    <div>
      {comments.map(({ comment, photoURL, timestamp, username }) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "5px",
          }}
        >
          <div style={{ marginRight: "160px" }}>
            <Avatar src={photoURL} />
            <Typography variant="p">{username}</Typography>
            <Typography variant="body2" color="textSecondary">
              <Moment fromNow>
                {new Date(timestamp?.toDate()).toUTCString()}
              </Moment>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="body1">{comment}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;
