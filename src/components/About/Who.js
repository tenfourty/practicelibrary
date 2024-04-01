import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Who = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
    Who is this meant for?
    </Typography>
    <Typography gutterBottom>
    The practices in this library are meant to "empower teams to collaborate and deliver iteratively". That can mean a lot of things to a lot of different kinds of people. And this Practice Library can help all of them:
    <ul>
      <li>A product manager who needs to build the right thing, the right way.</li>
      <li>An engineering manager who wants to get everyone’s input toward and aligned to the same goal and then find ways to coordinate the delivery of the team.</li>
      <li>A technical leader who is</li>
      <li>A stakeholder who needs a roadmap to deliver metrics-based business outcomes.</li>
      <li>For everyone, these practices are created, tested and shared by the people who use them day-to-day.</li>
    </ul>
    The practices are for the people looking to be inspired with new ideas to create better experiences. And anyone who wants to find innovative, proven ways to solve their challenges, big and small.
    </Typography>
  </Box>
);

export default Who;