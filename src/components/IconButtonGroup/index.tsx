import React from "react";
import { ButtonGroup, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import Avatar from "@mui/material/Avatar";

export default function IconButtonGroup() {
  return (
    <ButtonGroup>
    <IconButton color="inherit">
      <NotificationsIcon />
    </IconButton>
    <IconButton color="inherit" >
      <MessageIcon />
    </IconButton>
    <IconButton color="inherit">
      <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
    </IconButton>
  </ButtonGroup>
  );
}