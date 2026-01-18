import { Box, Typography } from '@mui/material'
import React from 'react'

export default function AirlineShowcaseComponent({ airlineTopic, airlineImages }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          m: 0,
          lineHeight: 1.1,
          color:"#000000" 
        }}
      >
        {airlineTopic}
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {airlineImages.map((airline, index) => (
          <Box
            key={index}
            component="img"
            src={airline}
            alt="airline"
            sx={{
              width: 200,
              height: 200,
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
