import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  Slider,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export default function AccordingComponentWrapper() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AccordingComponent />
    </LocalizationProvider>
  );
}

function AccordingComponent() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [departure, setDeparture] = useState([0, 24]);
  const [arrival, setArrival] = useState([0, 24]);
  const [price, setPrice] = useState([392640, 1164640]);
  const [tripType, setTripType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [departureTime, setDepartureTime] = useState("08:00");
  const [arrivalTime, setArrivalTime] = useState("12:00");

  const formatTime = (v) =>
    `${v === 0 ? 12 : v > 12 ? v - 12 : v}:00 ${v >= 12 ? "PM" : "AM"}`;

  return (
    <Box
      sx={{
        width: "90%",
        border: "2px solid #3F1723",
        borderRadius: "10px",
        p: 2,
        mx: "auto",
        mt: "30px",
        padding: "20px",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            Yangon (RGN) → Bangkok (BKK)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wed, 14 Jan 2026 • 1 Adult • One Way Trip
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" onClick={() => setOpenFilter(!openFilter)}>
            Filter your search result
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenEdit(!openEdit)}
          >
            Edit Search
          </Button>
        </Box>
      </Box>

      {/* FILTER SECTION */}
      <Collapse in={openFilter}>
        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 280px)" },
            gap: 3,
            justifyContent: "space-evenly",
          }}
        >
          {/* Departure */}
          <Box>
            <Typography fontWeight="bold" mb={1}>
              Departure Time
            </Typography>
            {/* <Slider
              sx={{ maxWidth: 280 }}
              value={departure}
              min={0}
              max={24}
              onChange={(e, v) => setDeparture(v)}
              valueLabelDisplay="auto"
              valueLabelFormat={formatTime}
            /> */}
            <TextField
              type="time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              sx={{ maxWidth: 280 }}
            />
          </Box>

          {/* Arrival */}
          <Box>
            <Typography fontWeight="bold" mb={1}>
              Arrival Time
            </Typography>
            {/* <Slider
              sx={{ maxWidth: 280 }}
              value={arrival}
              min={0}
              max={24}
              onChange={(e, v) => setArrival(v)}
              valueLabelDisplay="auto"
              valueLabelFormat={formatTime}
            /> */}

            <TextField
              type="time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              sx={{ maxWidth: 280 }}
            />
          </Box>

          {/* Price */}
          <Box>
            <Typography fontWeight="bold" mb={1}>
              Price
            </Typography>
            <Slider
              sx={{ maxWidth: 280 }}
              value={price}
              min={300000}
              max={1200000}
              step={10000}
              onChange={(e, v) => setPrice(v)}
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>

        <Box sx={{textAlign: "right", mt: 3 }}>
          <Button variant="contained" color="warning" sx={{padding: "10px 60px"}}>
            Search
          </Button>
        </Box>
      </Collapse>

      {/* EDIT SECTION */}
      <Collapse in={openEdit}>
        <Divider sx={{ my: 1 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            borderRadius: 2,
          }}
        >
          {/* Trip Type Radio */}
          <FormControl>
            <FormLabel>Trip Type</FormLabel>
            <RadioGroup
              row
              name="trip-type-group"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <FormControlLabel value="one-way" control={<Radio />} label="One Way" />
              <FormControlLabel value="round-trip" control={<Radio />} label="Round Trip" />
            </RadioGroup>
          </FormControl>

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

            {/* Return Date */}
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

            <Button
              variant="contained"
              size="large"
              sx={{ height: 40, whiteSpace: "nowrap" }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
