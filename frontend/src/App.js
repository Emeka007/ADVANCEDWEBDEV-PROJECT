import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { ProSidebarProvider } from "react-pro-sidebar";

// Components
import SignInAndSignUp from "./scenes/login/SignInAndSignUp";
import Dashboard from "./scenes/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

// Pages
import BookingH from "./scenes/bookingh";
import BookingD from "./scenes/bookingd";
import Invoices from "./scenes/invoices";
import Performance_Metric from "./scenes/performance_metric";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Settings from "./scenes/settings";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ProSidebarProvider>
            <Box sx={{
              display: 'flex',
              height: '100vh',
              overflow: 'hidden',
              backgroundColor: theme.palette.background.default
            }}>
              {loggedIn && (
                <Sidebar 
                  isCollapsed={isSidebarCollapsed} 
                  setIsCollapsed={setIsSidebarCollapsed} 
                />
              )}
              <Box component="main" sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                ml: isSidebarCollapsed ? '80px' : '250px',
                transition: 'margin-left 0.3s ease',
                '@media (max-width: 768px)': { ml: 0 }
              }}>
                {loggedIn && <Topbar setIsSidebarCollapsed={setIsSidebarCollapsed} />}
                <Box sx={{
                  flex: 1,
                  overflowY: 'auto',
                  p: 3,
                  "&::-webkit-scrollbar": { width: "8px" },
                  "&::-webkit-scrollbar-track": { 
                    background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f1f1f1' 
                  },
                  "&::-webkit-scrollbar-thumb": { 
                    background: theme.palette.mode === 'dark' ? '#555' : '#888',
                    borderRadius: "4px" 
                  },
                }}>
                  <Routes>
                    <Route path="/" element={
                      !loggedIn ? (
                        <SignInAndSignUp setLoggedIn={() => setLoggedIn(true)} />
                      ) : (
                        <Navigate to="/dashboard" replace />
                      )
                    }/>

                    {/* Dashboard */}
                    <Route path="/dashboard" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Dashboard />
                      </ProtectedRoute>
                    }/>

                    {/* Booking Pages */}
                    <Route path="/bookingh" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <BookingH />
                      </ProtectedRoute>
                    }/>
                    <Route path="/bookingd" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <BookingD />
                      </ProtectedRoute>
                    }/>

                    {/* Data Pages */}
                    <Route path="/invoices" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Invoices />
                      </ProtectedRoute>
                    }/>
                    <Route path="/performance_metric" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Performance_Metric />
                      </ProtectedRoute>
                    }/>
                    <Route path="/form" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Form />
                      </ProtectedRoute>
                    }/>

                    {/* Calendar */}
                    <Route path="/calendar" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Calendar />
                      </ProtectedRoute>
                    }/>

                    {/* FAQ */}
                    <Route path="/faq" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <FAQ />
                      </ProtectedRoute>
                    }/>

                    {/* Charts */}
                    <Route path="/bar" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Bar />
                      </ProtectedRoute>
                    }/>
                    <Route path="/pie" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Pie />
                      </ProtectedRoute>
                    }/>
                    <Route path="/line" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Line />
                      </ProtectedRoute>
                    }/>
                    <Route path="/geography" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Geography />
                      </ProtectedRoute>
                    }/>

                    {/* Settings */}
                    <Route path="/settings" element={
                      <ProtectedRoute isAuthenticated={loggedIn}>
                        <Settings />
                      </ProtectedRoute>
                    }/>

                    {/* Fallback route */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Box>
              </Box>
            </Box>
          </ProSidebarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;