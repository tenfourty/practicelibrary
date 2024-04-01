import React from "react";
import { Link } from "gatsby";
import { Box, Typography } from "@mui/material";
import { CCHeart } from "../../assets/icons/index";

const OPLMobius = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
    How This Library Relates to the Open Practice Library and the Mobius Loop
    </Typography>
    <Typography gutterBottom>
    This practice library is a downstream curated version of the Open Practice Library, which itself is based on the Mobius Loop.
    </Typography>
    <Typography gutterBottom>
    Except where noted, content on this site is licensed under a{" "}
      <Link
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noopener"
      >
        <CCHeart />
        Creative Commons Attribution 4.0
      </Link>{" "}
    International license.
    </Typography>
    <Typography gutterBottom>
    Being downstream of the Open Practice Library means that any additions and modifications to the practices in this practice library should be made upstream in the Open Practice Library project.
    </Typography>
    <Typography gutterBottom>
    As this is a curated version of the original, I have removed some of the practices in the Open Practice Library to provide a more opinionated subset of their practices, which I feel flow well together. As the Open Practice Library and this project are based on the experience of its contributors, if you feel that I'm missing a crucial practice from the upstream project, please get in touch so we can work to get it added here. Likewise, if the Open Practice Library lacks a practice you think should be included, please contribute there. Then, I would be very happy to work with you to include it here as well.
    </Typography>
  </Box>
);

export default OPLMobius;
