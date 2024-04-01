import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Feedback, Newspaper } from "@mui/icons-material";

const DrawerFooter = () => (
  <Box
    sx={(theme) => ({
      margin: `auto ${theme.spacing(2)} ${theme.spacing(2)}`,
    })}
  >
    <List>
      <ListItemButton
        component="a"
        href="https://www.jeremybrown.tech/newsletter/"
      >
        <ListItemIcon>
          <Newspaper />
        </ListItemIcon>
        <ListItemText primary="Subscribe to my Newsletter" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="https://www.jeremybrown.tech/contact/"
      >
        <ListItemIcon>
          <Feedback />
        </ListItemIcon>
        <ListItemText primary="Give me Feedback" />
      </ListItemButton>
    </List>
  </Box>
);

export default DrawerFooter;
