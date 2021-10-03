import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import db from "./firebase";
import { selectUser } from "./features/userSlice";
import firebase from "firebase";

const Adddoner = () => {
  const [bloodgroup, setbloodgroup] = useState("");
  const [number, setnumber] = useState("");
  const [location, setlocation] = useState("");
  const user = useSelector(selectUser);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("donar").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      bloodgroup: bloodgroup,
      number: number,
      location: location,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayname: user.displayName,
    });

    setbloodgroup("");
    setlocation("");
    setnumber("");
  };

  return (
    <div className="col-md-6 form-group mx-auto mt-4">
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
          disabled={!location}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Adddoner;
