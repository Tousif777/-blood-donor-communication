import { Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Data from "./Data";
import "./Rightside.css";
import db from "../firebase";

const Rightside = () => {
  const [value, setvalue] = useState("");
  const [donar, setdonar] = useState([]);
  useEffect(() => {
    db.collection("donar")
      .where("bloodgroup", "==", value)
      .onSnapshot((snapshot) =>
        setdonar(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [value]);

  return (
    <div>
      <Paper className="element" elevation={3}>
        <div className="textfield">
          <TextField
            label="Search blood group"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
        </div>
        <div className="data">
          {donar.map(({ id, data }) => (
            <Data key={id} data={data} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Rightside;