// src/components/SustainabilityGoalsTracker.jsx
import React, { useState } from "react";
import { Box, Typography, LinearProgress, Button, TextField, Card, CardContent } from "@mui/material";

const SustainabilityGoalsTracker = () => {
  const [targetReduction, setTargetReduction] = useState(1000); // Example: 1000 kg CO2 target
  const [currentReduction, setCurrentReduction] = useState(0);
  const [inputReduction, setInputReduction] = useState("");

  const handleAddReduction = () => {
    const value = parseFloat(inputReduction);
    if (!isNaN(value) && value > 0) {
      setCurrentReduction(prev => Math.min(prev + value, targetReduction)); // Prevent over 100%
      setInputReduction("");
    }
  };

  const progressPercentage = Math.min((currentReduction / targetReduction) * 100, 100);

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2, boxShadow: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Sustainability Goals Tracker
        </Typography>

        <Typography variant="body1" gutterBottom>
          Track your progress toward reducing carbon emissions and achieving your sustainability goals!
        </Typography>

        <Box sx={{ my: 3 }}>
          <Typography variant="subtitle1" fontWeight="medium">
            Goal: {targetReduction} kg CO₂
          </Typography>
          <Typography variant="subtitle1" fontWeight="medium">
            Current: {currentReduction} kg CO₂ reduced
          </Typography>
        </Box>

        <LinearProgress 
          variant="determinate" 
          value={progressPercentage} 
          sx={{ height: 10, borderRadius: 5, mb: 2 }}
          color={progressPercentage >= 100 ? "success" : "primary"}
        />

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {progressPercentage.toFixed(1)}% of your goal achieved
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
          <TextField
            label="Add Reduction (kg CO₂)"
            type="number"
            size="small"
            value={inputReduction}
            onChange={(e) => setInputReduction(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Button variant="contained" onClick={handleAddReduction}>
            Update
          </Button>
        </Box>

        {progressPercentage >= 100 && (
          <Typography variant="h6" color="success.main" sx={{ mt: 3 }}>
            🎉 Congratulations! You achieved your sustainability goal!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SustainabilityGoalsTracker;
