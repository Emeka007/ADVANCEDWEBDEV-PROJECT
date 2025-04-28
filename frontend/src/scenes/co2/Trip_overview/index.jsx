// src/scenes/performance_metric/Trip_overview.jsx
import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import { tokens } from "../../../theme";

// Emission Factors (grams of CO2 per km)
const emissionFactors = {
  'Electric Truck': 50,
  'Truck': 100,
  'Van': 70,
};

// Trip Data
const tripsData = [
  { bookingId: 'B001', timestamp: '2023-01-01', route: 'Helsinki-Kokkola', type: 'Electric Truck', distance: 483 },
  { bookingId: 'B002', timestamp: '2023-01-15', route: 'Kokkola-Oulu', type: 'Van', distance: 198 },
  { bookingId: 'B003', timestamp: '2023-01-31', route: 'Kokkola-Vaasa', type: 'Van', distance: 121 },
  { bookingId: 'B004', timestamp: '2023-02-01', route: 'Kokkola-Tampere', type: 'Truck', distance: 295 },
  { bookingId: 'B005', timestamp: '2023-02-14', route: 'Kokkola-Jyväskylä', type: 'Truck', distance: 218 },
  { bookingId: 'B006', timestamp: '2023-02-28', route: 'Helsinki-Oulu', type: 'Electric Truck', distance: 607 },
  { bookingId: 'B007', timestamp: '2023-03-01', route: 'Helsinki-Rovaniemi', type: 'Electric Truck', distance: 821 },
  { bookingId: 'B008', timestamp: '2023-03-15', route: 'Helsinki-Turku', type: 'Van', distance: 165 },
  { bookingId: 'B009', timestamp: '2023-03-30', route: 'Helsinki-Tampere', type: 'Electric Truck', distance: 176 },
  { bookingId: 'B010', timestamp: '2023-04-01', route: 'Helsinki-Vaasa', type: 'Electric Truck', distance: 419 },
];

// Trip Overview Component
const Trip_overview = ({ isSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [overallEmissions, setOverallEmissions] = useState(0);
  const [modeBreakdown, setModeBreakdown] = useState({
    'Electric Truck': 0,
    'Truck': 0,
    'Van': 0,
  });

  useEffect(() => {
    let totalEmissions = 0;
    const modeEmissions = { 'Truck': 0, 'Van': 0, 'Electric Truck': 0 };

    tripsData.forEach((trip) => {
      const emissionFactor = emissionFactors[trip.type] || 0;
      const emission = (trip.distance / 1000) * emissionFactor; // Convert km to kg
      totalEmissions += emission;
      modeEmissions[trip.type] += emission;
    });

    setOverallEmissions(totalEmissions);
    setModeBreakdown(modeEmissions);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: isSidebarCollapsed ? "80px" : "250px", // Adjust sidebar size dynamically
        overflowY: "auto",
        p: "20px",
        backgroundColor: colors.primary[400],
        transition: "left 0.3s ease",
      }}
    >
      <Header title="Trip Overview" subtitle="Carbon Emissions from Deliveries" />
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" mb={2}>
          Overall Emissions: <strong>{overallEmissions.toFixed(2)} kg CO₂</strong>
        </Typography>

        <Typography variant="h6" mt={4} mb={1}>
          Breakdown by Transportation Mode:
        </Typography>
        <ul>
          <li>Electric Truck: {modeBreakdown["Electric Truck"].toFixed(2)} kg CO₂</li>
          <li>Truck: {modeBreakdown["Truck"].toFixed(2)} kg CO₂</li>
          <li>Van: {modeBreakdown["Van"].toFixed(2)} kg CO₂</li>
        </ul>

        <Typography variant="h6" mt={4} mb={1}>
          CO₂ Emissions per Trip:
        </Typography>
        <ul>
          {tripsData.map((trip) => (
            <li key={trip.bookingId}>
              {trip.type} ({trip.route}) - {trip.distance} km - {((trip.distance / 1000) * emissionFactors[trip.type]).toFixed(2)} kg CO₂ - {trip.timestamp}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Trip_overview;
