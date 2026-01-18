import React, { useState } from "react";
import { Box, Button, Chip, Collapse, Stack, Typography } from "@mui/material";
import FlightDetailComponenet from "./FlightDetailComponenet";
import FarePackageComponent from "./FarePackageComponent";
import FareBreakdownComponent from "./FareBreakdownComponent";

export default function TicketSectionComponent({ flightsData }) {
  const [activeTab, setActiveTab] = useState(null);
  const [activeFlightId, setActiveFlightId] = useState(null);

  const handleTabClick = (flightId, tab) => {
    if (activeFlightId === flightId && activeTab === tab) {
      setActiveTab(null);
      setActiveFlightId(null);
    } else {
      setActiveTab(tab);
      setActiveFlightId(flightId);
    }
  };

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      {flightsData.map((flight) => (
        <Box key={flight.id} sx={{ mb: 5 }}>
          {/* ===== Ticket Card ===== */}
          <Stack direction="column" spacing={3} sx={{ width: "100%", padding: "40px" }}>
            <Chip
              label={flight.status}
              variant="outlined"
              sx={{ width: "120px", backgroundColor: "secondary.main", color: "white" }}
            />

            <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Airline Info */}
              <Box sx={{ width: 300, display: "flex", gap: 2 }}>
                <img src={flight.airline.logo} width={70} height={70} alt="airline" />
                <Box>
                  <Typography variant="h5" fontWeight="bold">{flight.timeRange}</Typography>
                  <Typography variant="h6" fontWeight="bold">{flight.airline.name}</Typography>
                </Box>
              </Box>

              {/* Route with dotted line */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* Departure */}
                <Box sx={{ width: 100, textAlign: "center" }}>
                  <Typography variant="h5" fontWeight="bold">{flight.departure.code}</Typography>
                  <Typography variant="body2">{flight.departure.airport}</Typography>
                </Box>

                {/* Duration & dotted line */}
                <Box sx={{ width: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography fontWeight="bold">Duration</Typography>
                  <Typography color="text.secondary">{flight.duration}</Typography>
                  <Typography color="text.secondary">{flight.direct ? "Direct" : "Transit"}</Typography>

                  {/* Dotted line */}
                  <Box sx={{ position: "relative", width: "100%", height: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", my: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "primary.main", zIndex: 1 }} />
                    <Box sx={{ position: "absolute", left: 10, right: 10, top: "50%", borderTop: "2px dashed", borderColor: "primary.main", transform: "translateY(-50%)" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "primary.main", zIndex: 1 }} />
                  </Box>
                </Box>

                {/* Arrival */}
                <Box sx={{ width: 100, textAlign: "center" }}>
                  <Typography variant="h5" fontWeight="bold">{flight.arrival.code}</Typography>
                  <Typography variant="body2">{flight.arrival.airport}</Typography>
                </Box>
              </Box>

              {/* Price */}
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ color: "#c2915d", fontWeight: 500 }}>
                  {flight.currency} {flight.price.toLocaleString()}
                </Typography>
                <Button variant="contained" sx={{ width: 200 }}>Choose</Button>
              </Box>
            </Box>
          </Stack>

          {/* ===== Tabs ===== */}
          <Stack direction="row" spacing={4} ml={5}>
            <Button
              onClick={() => handleTabClick(flight.id, "flight")}
              sx={{ borderBottom: activeTab === "flight" && activeFlightId === flight.id ? "3px solid #57292B" : "3px solid transparent" }}
            >
              Flight Detail
            </Button>
            <Button
              onClick={() => handleTabClick(flight.id, "farePackages")}
              sx={{ borderBottom: activeTab === "farePackages" && activeFlightId === flight.id ? "3px solid #57292B" : "3px solid transparent" }}
            >
              Fare Packages
            </Button>
            <Button
              onClick={() => handleTabClick(flight.id, "fareBreakdown")}
              sx={{ borderBottom: activeTab === "fareBreakdown" && activeFlightId === flight.id ? "3px solid #57292B" : "3px solid transparent" }}
            >
              Fare Breakdown
            </Button>
          </Stack>

          {/* ===== Collapses ===== */}
          <Collapse in={activeTab === "flight" && activeFlightId === flight.id} timeout="auto" unmountOnExit>
            <FlightDetailComponenet flight={flight} />
          </Collapse>

          <Collapse in={activeTab === "farePackages" && activeFlightId === flight.id} timeout="auto" unmountOnExit>
            <FarePackageComponent farePackages={flight.farePackages} />
          </Collapse>

          <Collapse in={activeTab === "fareBreakdown" && activeFlightId === flight.id} timeout="auto" unmountOnExit>
            <FareBreakdownComponent flight={flight} />
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
