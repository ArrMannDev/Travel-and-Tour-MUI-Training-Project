import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export default function FareCardComponent({ farePackages }) {
  if (!farePackages || farePackages.length === 0) return null;

  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap"}}>
      {farePackages.map((pkg) => (
        <Card
          key={pkg.id}
          variant="outlined"
          sx={{
            minWidth: 220,
            backgroundColor: "primary.main",
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography gutterBottom sx={{ color: "white", fontSize: 14 }}>
              {pkg.name}
            </Typography>

            <Typography variant="h6" sx={{ color: "white" }}>
              Baggage : {pkg.baggage}
            </Typography>

            <Typography variant="h6" sx={{ color: "white" }}>
              Seat : {pkg.seatLeft} Left
            </Typography>

            <Typography variant="h6" sx={{ color: "white", mt: 1 }}>
              Price : MMK {pkg.price.toLocaleString()}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              sx={{ width: "100%", borderRadius: 3 }}
            >
              Choose
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
