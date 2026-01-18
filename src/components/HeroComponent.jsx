import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"; // make sure @mui/x-date-pickers is installed

export default function HeroComponent({bannerTitle,bannerSubtitle}) {
  // STATE VARIABLES
  const [tabValue, setTabValue] = useState(0);
  const [tripType, setTripType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  // Example title/subtitle
  const title = "Book Your Flight";
  const subtitle = "Find the best flights for your trip";

  return (
    <>
      {/* Hero Text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: 2,
          pt: { xs: 4, md: 6 },
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: 32, md: 48 }, mt: 2}}>
          {bannerTitle}
        </Typography>

        <Typography variant="h4" sx={{ mt: 1, opacity: 0.9, fontSize: { xs: 14, md: 16 }}}>
          {bannerSubtitle}
        </Typography>
      </Box>

      {/* Search Card Overlay */}
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: { xs: 18, md: 26 },
          width: "min(1100px, calc(100% - 24px))",
          height: { xs: "400px", sm: "380px", md: "230px", lg: "200px" },
          borderRadius: 3,
          zIndex: 2,
          p: { xs: 2, md: 2.5 },
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(5px)",
          // border: "1px solid rgba(255, 255, 255, 0.25)",
          // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{
            mb: 2,
            justifyContent: "center",
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              minWidth: 100,
              borderRadius: 2,
              transition: "all 0.3s ease",
            },
          }}
        >
          <Tab label="Domestic" />
          <Tab label="International" />
        </Tabs>

        {/* Trip Type Radio */}
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2 }}>
          <RadioGroup row name="trip-type-group" value={tripType} onChange={(e) => setTripType(e.target.value)}>
            <FormControlLabel value="one-way" control={<Radio />} label="One Way" />
            <FormControlLabel value="round-trip" control={<Radio />} label="Round Trip" />
          </RadioGroup>
        </Box>

        {/* Inputs */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1.2fr 1fr 1fr auto" },
            gap: 1.2,
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Leaving from"
            style={{ padding: "8px", width: "100%", borderRadius: 4 }}
          />
          <input
            type="text"
            placeholder="Going to"
            style={{ padding: "8px", width: "100%", borderRadius: 4 }}
          />

          {/* Departure Date */}
          <DatePicker
            label="Departure"
            value={departureDate}
            onChange={(newValue) => setDepartureDate(newValue)}
            slotProps={{
              textField: { size: "small", fullWidth: true },
            }}
          />

          {/* Return Date (only if round-trip) */}
          {tripType === "round-trip" && (
            <DatePicker
              label="Return"
              value={returnDate}
              onChange={(newValue) => setReturnDate(newValue)}
              slotProps={{
                textField: { size: "small", fullWidth: true },
              }}
            />
          )}

          <Button variant="contained" size="large" sx={{ height: 40, whiteSpace: "nowrap" }}>
            Search
          </Button>
        </Box>
      </Paper>
    </>
  );
}
