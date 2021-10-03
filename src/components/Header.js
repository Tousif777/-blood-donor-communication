import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#d32f2f" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blood donation
          </Typography>
          <Button Link to="/adddoner" color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/adddoner"
            >
              became a doner
            </Link>
          </Button>
          <Button
            onClick={() => auth.signOut()}
            style={{ color: "white", marginLeft: "30px" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
