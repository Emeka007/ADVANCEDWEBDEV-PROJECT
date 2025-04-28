import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = ({ isSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
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
        backgroundColor: colors.primary[400], // Optional: match your app's background
      }}
    >
      <Header title="Geography" subtitle="Simple Geography Chart" />
      
      <Box
        height="calc(100vh - 100px)" // Accounts for header and padding
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;