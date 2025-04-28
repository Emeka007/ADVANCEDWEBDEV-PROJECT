import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Grid } from '@mui/material';
import Header from "../../../components/Header";

const EmissionsCalculator = ({ isSidebarCollapsed }) => {
  const [totalEmissions, setTotalEmissions] = useState(0);
  const [numberOfPackages, setNumberOfPackages] = useState(0);
  const [emissionsPerPackage, setEmissionsPerPackage] = useState(0);

  // State for input fields
  const [truckData, setTruckData] = useState({
    distanceTraveled: 0,
    mpg: 0,
    emissionFactor: 0,
  });

  const [vanData, setVanData] = useState({
    distanceTraveled: 0,
    mpg: 0,
    emissionFactor: 0,
  });

  const [ferryData, setFerryData] = useState({
    distanceTraveled: 0,
    consumptionPerNauticalMile: 0,
    emissionFactor: 0,
  });

  const handleInputChange = (e, setData, data) => {
    setData({
      ...data,
      [e.target.name]: parseFloat(e.target.value) || 0,
    });
  };

  const calculateEmissions = (data) => {
    const { distanceTraveled, mpg, consumptionPerNauticalMile, emissionFactor } = data;
    if (consumptionPerNauticalMile) {
      return distanceTraveled * consumptionPerNauticalMile * emissionFactor;
    }
    return (distanceTraveled / (mpg || 1)) * emissionFactor;
  };

  const handleCalculateClick = () => {
    const truckEmissions = calculateEmissions(truckData);
    const vanEmissions = calculateEmissions(vanData);
    const ferryEmissions = calculateEmissions(ferryData);

    const totalEmissionsForTrip = truckEmissions + vanEmissions + ferryEmissions;
    setTotalEmissions(totalEmissionsForTrip.toFixed(2));

    setEmissionsPerPackage(
      numberOfPackages > 0 
        ? (totalEmissionsForTrip / numberOfPackages).toFixed(2) 
        : 0
    );
  };

  return (
    <Box 
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: isSidebarCollapsed ? '80px' : '250px',
        overflow: 'auto',
        p: '20px',
        transition: 'left 0.3s ease',
      }}
    >
      <Header title="Emissions Calculator" subtitle="Calculate carbon footprint" />

      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <Grid container spacing={3}>
          {/* Truck Data */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Truck Data</Typography>
            <TextField
              fullWidth
              label="Distance Traveled (miles)"
              variant="outlined"
              type="number"
              name="distanceTraveled"
              value={truckData.distanceTraveled}
              onChange={(e) => handleInputChange(e, setTruckData, truckData)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="MPG (Miles per Gallon)"
              variant="outlined"
              type="number"
              name="mpg"
              value={truckData.mpg}
              onChange={(e) => handleInputChange(e, setTruckData, truckData)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Emission Factor (kg CO2/gallon)"
              variant="outlined"
              type="number"
              name="emissionFactor"
              value={truckData.emissionFactor}
              onChange={(e) => handleInputChange(e, setTruckData, truckData)}
            />
          </Grid>

          {/* Van Data */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Van Data</Typography>
            <TextField
              fullWidth
              label="Distance Traveled (miles)"
              variant="outlined"
              type="number"
              name="distanceTraveled"
              value={vanData.distanceTraveled}
              onChange={(e) => handleInputChange(e, setVanData, vanData)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="MPG (Miles per Gallon)"
              variant="outlined"
              type="number"
              name="mpg"
              value={vanData.mpg}
              onChange={(e) => handleInputChange(e, setVanData, vanData)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Emission Factor (kg CO2/gallon)"
              variant="outlined"
              type="number"
              name="emissionFactor"
              value={vanData.emissionFactor}
              onChange={(e) => handleInputChange(e, setVanData, vanData)}
            />
          </Grid>

          {/* Ferry Data */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Ferry Data</Typography>
            <TextField
              fullWidth
              label="Distance Traveled (nautical miles)"
              variant="outlined"
              type="number"
              name="distanceTraveled"
              value={ferryData.distanceTraveled}
              onChange={(e) => handleInputChange(e, setFerryData, ferryData)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Consumption per Nautical Mile"
              variant="outlined"
              type="number"
              name="consumptionPerNauticalMile"
              value={ferryData.consumptionPerNauticalMile}
              onChange={(e) => handleInputChange(e, setFerryData, ferryData)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Emission Factor"
              variant="outlined"
              type="number"
              name="emissionFactor"
              value={ferryData.emissionFactor}
              onChange={(e) => handleInputChange(e, setFerryData, ferryData)}
            />
          </Grid>

          {/* Common Data */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Common Data</Typography>
            <TextField
              label="Number of Packages"
              variant="outlined"
              type="number"
              value={numberOfPackages}
              onChange={(e) => setNumberOfPackages(parseInt(e.target.value, 10) || 0)}
              sx={{ width: 300 }}
            />
          </Grid>

          {/* Calculate Button */}
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleCalculateClick}
              size="large"
            >
              Calculate Emissions
            </Button>
          </Grid>

          {/* Results */}
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2, mt: 2, backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6">Results</Typography>
              <Typography>Total Emissions for the Trip: {totalEmissions} kg CO2</Typography>
              <Typography>Emissions per Package: {emissionsPerPackage} kg CO2</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default EmissionsCalculator;