import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import db from "./firebase";
import { selectUser } from "./features/userSlice";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import Flash from "react-reveal/Flash";

const Adddoner = () => {
  const [bloodgroup, setbloodgroup] = useState("");
  const [number, setnumber] = useState("");
  const [location, setlocation] = useState("");
  const user = useSelector(selectUser);
  const history = useHistory();

  const sendMessage = (e) => {
    e.preventDefault();
    // if email already in donar
    if (user) {
      db.collection("doners")
        .where("email", "==", user.email)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            db.collection("doners").add({
              email: user.email,
              bloodgroup: bloodgroup,
              number: number,
              location: location,
            });
            history.push("/");
          } else {
            alert("You are already a doner");
            setbloodgroup("");
            setnumber("");
            setlocation("");
          }
        });
    }
  };

  return (
    <div
      style={{
        marginTop: "50px",
        padding: "80px",
        backgroundColor: "#ddf0e9",
      }}
      className="col-md-6 form-group mx-auto "
    >
      <Flash>
        <h3
          style={{
            fontFamily: "cursive",
          }}
        >
          Be a donar
        </h3>
      </Flash>
      <br />
      <form>
        <div className="form-group">
          <TextField
            type="text"
            className="form-control"
            label="Blood group"
            variant="outlined"
            value={bloodgroup}
            onChange={(e) => setbloodgroup(e.target.value)}
          />
        </div>
        <div className="form-group">
          <TextField
            type="text"
            className="form-control"
            placeholder="Number"
            label="Phone Number"
            variant="outlined"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <TextField
            type="text"
            className="form-control"
            placeholder="Location"
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
        <Button
          onClick={sendMessage}
          type="submit"
          variant="contained"
          color="secondary"
          disabled={!location || !number || !bloodgroup}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Adddoner;
