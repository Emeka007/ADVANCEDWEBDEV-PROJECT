import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = ({ isSidebarCollapsed }) => {
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
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="calc(100vh - 100px)"> {/* Adjusted height calculation */}
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;