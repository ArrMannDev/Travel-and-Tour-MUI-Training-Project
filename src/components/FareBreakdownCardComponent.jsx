import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

export default function FareBreakdownCardComponent({ flight }) {
  const fareBreakdown = flight.fareBreakdown;

  return (
    <Card
      sx={{
        width: 230,
        borderRadius: 3,
        backgroundColor: "primary.main",
        color: "#fff",
      }}
    >
      <CardContent>

        {/* Header */}
        <Typography fontWeight={700} fontSize={14} mb={1}>
          {flight.farePackages?.[0]?.name ?? "Fare Breakdown"}
        </Typography>

        {/* Show Fare */}
        <Typography fontSize={13} sx={{ opacity: 0.9 }}>
          Show Fare
        </Typography>

        {/* Total */}
        <Typography fontWeight={700} fontSize={14} mt={1}>
          {flight.currency}
        </Typography>
        <Typography fontWeight={800} fontSize={22}>
          {fareBreakdown.total.toLocaleString()}
        </Typography>

        <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.5)" }} />

        {/* Passenger Pricing */}
        <Typography fontSize={13} sx={{ opacity: 0.9 }}>
          Price Per
        </Typography>

        {fareBreakdown.passenger.map((p) => (
          <Typography key={p.type} fontWeight={600} fontSize={14}>
            {p.type}: {flight.currency} {p.price.toLocaleString()}
          </Typography>
        ))}

      </CardContent>
    </Card>
  );
}
