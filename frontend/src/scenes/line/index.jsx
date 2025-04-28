import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = ({ isSidebarCollapsed }) => {
  return (
    <Box 
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: isSidebarCollapsed ? '80px' : '250px', // Matches sidebar width
        overflow: 'auto',
        p: '20px',
        transition: 'left 0.3s ease',
      }}
    >
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="calc(100vh - 100px)"> {/* Accounts for header and padding */}
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;