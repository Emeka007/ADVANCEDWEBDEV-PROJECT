import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = ({ isSidebarCollapsed }) => {
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
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="calc(100vh - 100px)">  {/* Adjusted height calculation */}
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;