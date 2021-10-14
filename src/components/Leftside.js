import React from "react";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Button, FormGroup, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Comment from "./Comment";
import "./Leftside.css";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import Addcomment from "./Addcomment";

export default function Leftside() {
  const [value, setvalue] = useState([]);
  const [comment, setcomment] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setvalue(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="leftside">
      {value.map(({ post, id }) => (
        <Card
          className="root"
          style={{
            maxWidth: 480,
            marginTop: 50,
          }}
        >
          <CardHeader
            avatar={<Avatar src={post.photo} className="sidebar_avatar" />}
            title={post.displayname}
            subheader={new Date(post.timestamp?.toDate()).toLocaleString()}
          />
          {post.displayname === user.displayName ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                db.collection("posts").doc(id).delete();
              }}
            >
              Delete
            </Button>
          ) : (
            <div></div>
          )}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>{post.post}</b>
              <br />
            </Typography>
          </CardContent>
          <CardContent>
            <Addcomment postid={id} key={id} />
            <div
              className="element"
              style={{
                maxHeight: "100px",
                overflow: "scroll",
              }}
            >
              {comment.map(({ comment, id }) => (
                <Comment key={id} comment={comment} postid={id} user={user} />
              ))}
              <Comment postid={id} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
