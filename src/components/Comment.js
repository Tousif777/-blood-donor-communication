import { Typography } from "@material-ui/core";
import React from "react";

function Comment() {
  return (
    <div>
      <Typography
        style={{
          marginTop: 15,
        }}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <strong>Srk :</strong>paella is a perfect party dish and a fun meal to
        cook together with your guests.
      </Typography>
    </div>
  );
}

export default Comment;
