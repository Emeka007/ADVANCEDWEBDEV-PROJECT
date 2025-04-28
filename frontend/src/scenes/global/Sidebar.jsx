import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100], margin: "5px 0" }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} style={{ textDecoration: "none" }} />}
    >
      <Typography variant="body1">{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  const handleCollapse = () => {
    collapseSidebar();
    setIsCollapsed(prev => !prev);
  };

  return (
    <Box sx={{
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 1000,
      width: isCollapsed ? '80px' : '250px',
      transition: 'width 0.3s ease',
      overflowY: 'auto',
      "& .pro-sidebar": { height: '100%', minHeight: '100vh' },
      "& .pro-sidebar-inner": { background: `${colors.primary[400]} !important` },
      "& .pro-icon-wrapper": { backgroundColor: "transparent !important" },
      "& .pro-menu-item": { 
        color: `${colors.grey[100]} !important`,
        "&:hover": { color: `${colors.blueAccent[500]} !important` },
        "&.active": { color: `${colors.greenAccent[500]} !important` },
      },
      "& .pro-menu": { padding: "10px 0" },
      "&::-webkit-scrollbar": { width: "6px" },
      "&::-webkit-scrollbar-thumb": { 
        background: theme.palette.mode === 'dark' ? '#555' : '#888',
        borderRadius: "3px" 
      },
    }}>
      <ProSidebar collapsed={isCollapsed} breakPoint="md" width="250px" collapsedWidth="80px">
        <Menu>
          {/* Header */}
          <MenuItem
            onClick={handleCollapse}
            icon={<MenuOutlinedIcon />}
            style={{
              margin: "10px 0 15px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="10px">
                <Typography variant="h4" color={colors.grey[100]} fontWeight="bold">
                  ADMIN
                </Typography>
              </Box>
            )}
          </MenuItem>

          {/* User Profile */}
          {!isCollapsed && (
            <Box mb="20px" px="15px">
              <Box display="flex" justifyContent="center" alignItems="center" mb="10px">
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={`${process.env.PUBLIC_URL}/assets/user.png`}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/assets/default-user.png`;
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h3" color={colors.grey[100]} fontWeight="bold">
                  Admin User
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Administrator
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box px={isCollapsed ? "10px" : "20px"}>
            <SidebarItem
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant="h6" 
              color={colors.grey[300]} 
              sx={{ 
                m: "15px 0 5px 0",
                paddingLeft: isCollapsed ? "10px" : "20px",
                display: isCollapsed ? "none" : "block"
              }}
            >
              Data
            </Typography>
            <SidebarItem
              title="Booking Details"
              to="/bookingd"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Booking History"
              to="/bookingh"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Invoices"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant="h6" 
              color={colors.grey[300]} 
              sx={{ 
                m: "15px 0 5px 0",
                paddingLeft: isCollapsed ? "10px" : "20px",
                display: isCollapsed ? "none" : "block"
              }}
            >
              Pages
            </Typography>
            <SidebarItem
              title="Profile"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant="h6" 
              color={colors.grey[300]} 
              sx={{ 
                m: "15px 0 5px 0",
                paddingLeft: isCollapsed ? "10px" : "20px",
                display: isCollapsed ? "none" : "block"
              }}
            >
              

              CO2 Emission
            </Typography>
            {/* CO2 Emission Section */}
<SidebarItem
  title="Trip Overview"
  to="/trip_overview"
  icon={<PersonOutlinedIcon />}
  selected={selected}
  setSelected={setSelected}
/>
<SidebarItem
  title="Package-level Emissions"
  to="/package_level"
  icon={<CalendarTodayOutlinedIcon />}
  selected={selected}
  setSelected={setSelected}
/>
<SidebarItem
  title="EmissionsCalculator"
  to="/emissions_calculator"
  icon={<HelpOutlineOutlinedIcon />}
  selected={selected}
  setSelected={setSelected}
/>
<SidebarItem
  title="Sustainability Goals Tracker"
  to="/sustainability_goals"
  icon={<HelpOutlineOutlinedIcon />}
  selected={selected}
  setSelected={setSelected}
/>

            <Typography 
              variant="h6" 
              color={colors.grey[300]} 
              sx={{ 
                m: "15px 0 5px 0",
                paddingLeft: isCollapsed ? "10px" : "20px",
                display: isCollapsed ? "none" : "block"
              }}
            >



              
              Charts
            </Typography>
            <SidebarItem
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Geography"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title="Settings"
              to="/settings"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

