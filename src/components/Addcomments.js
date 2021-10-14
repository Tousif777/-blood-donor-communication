import { Button, TextField } from "@material-ui/core";
import React from "react";

const Addcomments = () => {
  return (
    <div>
      <TextField
        style={{ width: "365px" }}
        label="Add Post here"
        variant="outlined"
      />
      <Button variant="contained" color="secondary">
        Add post
      </Button>
    </div>
  );
};

export default Addcomments;
