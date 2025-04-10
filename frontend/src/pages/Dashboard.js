import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4">Welcome to the Dashboard</Typography>
      </Container>
    </>
  );
};

export default Dashboard;
