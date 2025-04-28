import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = ({ isSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { 
      field: "id", 
      headerName: "ID", 
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "left",
    },
    {
      field: "phone",
      headerName: "PHONE NUMBER",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1.5,
      headerAlign: "left",
    },
    {
      field: "cost",
      headerName: "COST",
      flex: 1,
      headerAlign: "right",
      align: "right",
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} fontWeight="600">
          €{params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
      headerAlign: "right",
      align: "right",
    },
  ];

  return (
    <Box 
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: isSidebarCollapsed ? '80px' : '250px',
        overflow: 'auto',
        backgroundColor: colors.primary[400],
        transition: 'left 0.3s ease',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header Section */}
      <Box sx={{ 
        p: 3,
        flexShrink: 0 // Prevents header from shrinking
      }}>
        <Header 
          title="PAYMENT HISTORY" 
          subtitle="View detailed payment history for completed trips" 
        />
      </Box>

      {/* Main Content Area */}
      <Box sx={{
        flex: 1,
        overflow: 'auto',
        p: 3,
        pt: 0,
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: colors.primary[400],
        },
        '&::-webkit-scrollbar-thumb': {
          background: colors.blueAccent[700],
          borderRadius: '4px',
        },
      }}>
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection
          sx={{
            height: '100%',
            width: '100%',
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${colors.primary[500]}`,
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
              fontWeight: '600',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        />
      </Box>

      {/* Footer Section */}
      <Box sx={{ 
        p: 3,
        pt: 0,
        textAlign: 'right',
        flexShrink: 0 // Prevents footer from shrinking
      }}>
        <Typography variant="caption" color={colors.grey[100]}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Invoices;