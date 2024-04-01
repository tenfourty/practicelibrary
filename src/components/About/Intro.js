import React from "react";
import { Box, Typography } from "@mui/material";

const Intro = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom>
    This is an opinionated collection of practices aimed at changing human behaviours which impact business results (also called outcomes). They are organised around the Mobius Loop model, which helps us navigate when to use each practice.
    </Typography>
    <Typography gutterBottom>
    I, Jeremy Brown, built this first and foremost for myself to help me refer back to practices I regularly use.
    </Typography>
    <Typography gutterBottom>
    On my website, I've regularly referred to various practices in the Open Practice Library. At the same time, the Open Practice Library is a collection of many different practices, quite an overwhelming collection of them in fact. This is because of the vibrant community of folks that have contributed over the years. I am hugely proud of this since the Open Practice Library is a result of the work I was part of in Red Hat's Open Innovation Labs.
    </Typography>
    <Typography gutterBottom>
    I wanted to create a more opinionated subset of practices that I feel are relevant to the way I work and how I coach teams to work. This isn't to mean that these are the best practices, far from it. However I have a lot of experience using them and they fit logically together.
    </Typography>
    <Typography gutterBottom>
    While you can level many criticisms at Agile frameworks such as Scrum, they are a great way for teams starting out to get going. I always say Scrum is a great place for teams to start, but if they are still doing Scrum by the book in six months then they are not using the full power of their retrospectives to evolve how they work for their circumstances.
    </Typography>
    <Typography gutterBottom>
    In the same way I plan to provide some breadcrumb trails for teams to use to navigate the loop. However these are mean as jumping off points and should be adapted over time.
    </Typography>
  </Box>
);

export default Intro;






