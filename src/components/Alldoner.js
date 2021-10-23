import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../firebase";

const Alldoner = () => {
  const [alldoner, setalldoner] = useState([]);
  useEffect(() => {
    db.collection("donar")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setalldoner(
          snapshot.docs.map((doc) =>
            doc.data({
              id: doc.id,
              data: doc.data(),
            })
          )
        )
      );
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "scroll",
        backgroundColor: "#b32020",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontSize: "30px",
          fontFamily: "cursive",
          color: "white",
        }}
      >
        All avaible doner in this site
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          flexDirection: "row",
          padding: "20px",
        }}
      >
        {alldoner.map((doner) => (
          <>
            <Card
              style={{ cursor: "pointer", padding: "20px", marginTop: "20px" }}
              sx={{ minWidth: 275 }}
            >
              <CardContent>
                <Avatar src={doner.photo} />
                <br />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Name: {doner.displayname}
                </Typography>
                <Typography variant="h5" component="div">
                  Bloodgroup: {doner.bloodgroup}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Email: {doner.email}
                </Typography>
                <Typography variant="body2">
                  Phone number: {doner.number}
                  <br />
                  Location:{doner.location}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default Alldoner;
