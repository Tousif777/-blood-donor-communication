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

export default function Leftside() {
  const [value, setvalue] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(
      (snapshot) => setvalue(snapshot.docs.map((doc) => doc.data())),
      console.log(value)
    );
  }, []);
  return (
    <div className="leftside">
      {value.map((item) => (
        <Card
          className="root"
          style={{
            maxWidth: 480,
            marginTop: 50,
          }}
        >
          <CardHeader
            avatar={<Avatar src={item.photo} className="sidebar_avatar" />}
            title={item.displayname}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>{item.displayname} </strong> {item.post}
            </Typography>
          </CardContent>
          <CardContent>
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
                />
                <Button variant="contained" color="secondary">
                  Add comment
                </Button>
              </div>
            </FormGroup>
            <div
              className="element"
              style={{
                maxHeight: "100px",
                overflow: "scroll",
              }}
            >
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
