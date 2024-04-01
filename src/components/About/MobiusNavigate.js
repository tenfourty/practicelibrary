import React from "react";
import { Link } from "gatsby"
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import MobiusLoopHero from "../shared/MobiusLoopHero";

const MobiusNavigate = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
    The Mobius Loop Helps Navigate The Practices
    </Typography>
    <Typography gutterBottom>
    All of the practices in this library can be mapped to the Mobius Loop. The Mobius Loop is a navigator created by an open-source community to visualise a way of working that focuses on generating outcomes by working in a continuous flow of innovation from discovery to design to delivery. The Open Practice Library added a layer, the "Foundation" of cultural and technical practices.
    </Typography>
    <Typography gutterBottom>
    Practices can be mapped to one of four parts of the loop:
    </Typography>
    <Box my={4}>
          <MobiusLoopHero showContent={false} />
        </Box>
    <Typography gutterBottom>
    <ul>
      <li><Link to="/tags/discovery"><b>Discovery</b></Link> - practices to help define target outcomes.</li>
      <li><Link to="/tags/options"><b>Options</b></Link> - practices to help identify the path to the right outcomes.</li>
      <li><Link to="/tags/delivery"><b>Delivery</b></Link> - practices to put your ideas to the test. Learn what works and what doesn’t.</li>
      <li><Link to="/tags/foundation"><b>Foundation</b></Link> - Cultural practices and technical practices in the foundational layer that accelerate and maximise the use of the Mobius Loop.</li>
    </ul>
    </Typography>
  </Box>
);

export default MobiusNavigate;