import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import BaggageIcon from "../assets/image/baggage-icon.svg";

export default function FlightDetailComponent({ flight }) {
  if (!flight) return null;

  return (
    <Box sx={{ p: "40px", width: "100%" }}>
      <Stack direction="row" spacing={10} alignItems="flex-start">

        {/* LEFT – Airline Info */}
        <Box sx={{ minWidth: 220 }}>
          <img
            src={flight.airline.logo}
            alt={flight.airline.name}
            width={60}
          />
          <Typography fontSize={16} fontWeight={500} mt={1}>
            {flight.airline.name}
          </Typography>
          <Typography fontSize={14} color="text.secondary">
            {flight.airline.code} | {flight.airline.aircraft}
          </Typography>
        </Box>

        {/* CENTER – Timeline */}
        <Stack direction="row" spacing={3} alignItems="flex-start">

          {/* Time Column */}
          <Stack spacing={14} alignItems="flex-end">
            <Box textAlign="right">
              <Typography fontWeight={700}>
                {flight.departure.time}
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                {flight.departure.date}
              </Typography>
            </Box>

            <Box textAlign="right">
              <Typography fontWeight={700}>
                {flight.arrival.time}
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                {flight.arrival.date}
              </Typography>
            </Box>
          </Stack>

          {/* Dotted Line */}
          <Box sx={{ position: "relative", height: 180 }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "primary.main",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 12,
                bottom: 12,
                left: "50%",
                borderLeft: "2px dashed",
                borderColor: "primary.main",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "primary.main",
              }}
            />
          </Box>

          {/* Details Column */}
          <Stack spacing={3}>
            <Box>
              <Typography fontWeight={600}>
                {flight.departure.airport}
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                {flight.departure.city}
              </Typography>
            </Box>

            <Box>
              <Typography fontSize={14} color="text.secondary">
                Duration
              </Typography>
              <Typography fontWeight={600}>
                {flight.duration}
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                {flight.direct ? "Direct" : "Transit"}
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight={600}>
                {flight.arrival.airport}
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                {flight.arrival.city}
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* RIGHT – Baggage */}
        <Stack spacing={2}>
          <Chip
            variant="outlined"
            label="Baggage allowance"
            sx={{ backgroundColor: "secondary.main", color: "white" }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={BaggageIcon} alt="baggage" />
            <Typography variant="h5">
              {flight.baggage.allowance}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
