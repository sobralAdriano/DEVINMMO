import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component={Link} to="/">
              DEVINMMO
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
