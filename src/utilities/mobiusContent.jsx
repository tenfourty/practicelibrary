import React from "react";
import {
  AllInclusive,
  Terrain,
  Loop,
  Telegram,
  Explore,
} from "@mui/icons-material";

const useMobiusContent = {
  foundation: {
    color: "foundationcolor.dark",
    icon: <Terrain />,
  },
  discovery: {
    color: "discoverycolor.main",
    icon: <Explore />,
  },
  options: {
    color: "optionscolor.main",
    icon: <Loop />,
  },
  delivery: {
    color: "deliverycolor.main",
    icon: <Telegram />,
  },
  all: {
    icon: <AllInclusive />,
    color: "grey.400",
  },
};

export default useMobiusContent;
