import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import React from "react";

function Data({ data }) {
  return (
    <div>
      <Card
        style={{
          marginBottom: 20,
        }}
      >
        <CardHeader
          avatar={<Avatar src={data.photo} className="sidebar_avatar" />}
          title={data.displayname}
          subheader={data.email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Name: {data.displayname}</p>
            <p>
              Blood group:<strong> {data.bloodgroup} </strong>
            </p>
            <p>
              Number: <strong> {data.number} </strong>
            </p>
            <p>
              Location: <strong> {data.location} </strong>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Data;
