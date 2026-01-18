import React from "react";
import { Stack, Typography } from "@mui/material";
import FareBreakdownCardComponent from "./FareBreakdownCardComponent";

export default function FareBreakdownComponent({ flight }) {
  if (!flight?.fareBreakdown) {
    return (
      <Typography sx={{ p: 4 }}>
        Fare breakdown not available
      </Typography>
    );
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      flexWrap="wrap"
      sx={{ padding: "40px" }}
    >
      <FareBreakdownCardComponent flight={flight} />
    </Stack>
  );
}
