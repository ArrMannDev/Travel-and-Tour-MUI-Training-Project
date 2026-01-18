import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HeroComponent from "./HeroComponent";
import bannerImage from "../assets/image/airplaneBanner.png"

export default function BannerComponent({bannerTitle,bannerSubtitle}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 520, md: 500 },
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)", // adjust darkness
            zIndex: 1,
          }}
        />

        {/* Hero content */}
        <HeroComponent bannerTitle={bannerTitle} bannerSubtitle={bannerSubtitle} />
        
      </Box>
    </LocalizationProvider>
  );
}
