import React from "react";
import { Link } from "gatsby"
import { Box } from "@mui/material";
import LogoImage from "./CustomLogo.svg";

const CustomLogo = ({
  color = "text.primary",
  small = false,
  horizontal = false,
  ...rest
}) => {
  return (
	<Link to="/">
		<Box display="flex" alignItems="center" {...rest}>
		  <Box width={small ? "2.5rem" : "5.5rem"}>
			<img width="100%" src={LogoImage} alt="Jeremy Brown's Practice Library Logo" />
		  </Box>
		  <Box
			ml={small ? 1 : 2}
			color={color}
			fontFamily="fontFamily"
			fontWeight={500}
			fontSize={small ? ".75rem" : "1.125rem"}
			display="flex"
			style={{
			  textTransform: "uppercase",
			}}
			width={horizontal ? "100%" : "5rem"}
		  >
			Jeremy's Practice Library
		  </Box>
		</Box>
	</Link>
  );
};

export default CustomLogo;
