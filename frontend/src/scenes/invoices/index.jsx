import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
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
        <Typography 
          color={colors.greenAccent[500]}
          fontWeight="600"
        >
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
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <Box sx={{ p: 3, pb: 0 }}>
        <Header 
          title="PAYMENT HISTORY" 
          subtitle="View detailed payment history for completed trips"
        />
      </Box>

      {/* DATA GRID CONTAINER */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          pt: 0,
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: colors.primary[400],
          },
          "&::-webkit-scrollbar-thumb": {
            background: colors.blueAccent[700],
            borderRadius: "4px",
          },
        }}
      >
        {/* DATA GRID */}
        <Box
          sx={{
            height: "100%",
            minHeight: "600px", // Ensures minimum height
            width: "100%",
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
              fontSize: "0.9rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${colors.primary[500]}`,
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              fontWeight: "600",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
          }}
        >
          <DataGrid
            rows={mockDataInvoices}
            columns={columns}
            checkboxSelection
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            sx={{
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
            }}
          />
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ p: 3, pt: 0, textAlign: "right" }}>
        <Typography variant="caption" color={colors.grey[100]}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Invoices;