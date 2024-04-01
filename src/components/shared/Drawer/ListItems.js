import React from "react";
import { Link } from "gatsby";
import {
  Divider,
  ListItem,
  ListSubheader,
  List,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, LibraryBooks, Info, LibraryAdd } from "@mui/icons-material";

const ListItemButtonLink = (props) => {
  const { to, ...other } = props;
  return <ListItemButton component={Link} to={to} {...other} />;
};

const ListItems = ({ toggle }) => {
  return (
    <List data-testid="drawerPractices">
      <ListItemButton
        component="a"
        href="https://www.jeremybrown.tech/"
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Back to Jeremy Brown" />
      </ListItemButton>
      <ListSubheader>
        <Typography variant="overline" color="primary">
          Practices
        </Typography>
      </ListSubheader>
      <ListItemButtonLink to="/">
        <ListItemIcon>
          <LibraryBooks />
        </ListItemIcon>
        Library Home
      </ListItemButtonLink>
      <ListSubheader>
        <Typography variant="overline" color="primary">
          Learn and Contribute
        </Typography>
      </ListSubheader>
      <ListItemButtonLink to="/about/">
        <ListItemIcon>
          <Info />
        </ListItemIcon>
        About this Library
      </ListItemButtonLink>
      <ListItemButtonLink to="/page/contribution-guide/">
        <ListItemIcon>
          <LibraryAdd />
        </ListItemIcon>
        Contributing
      </ListItemButtonLink>
    </List>
  );
};

export default ListItems;
