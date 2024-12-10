import { useMemo, useState } from "react";
import { DataGrid, GridColDef, GridToolbar, useGridApiContext } from "@mui/x-data-grid";
import { TextField, Button, Box, Typography } from "@mui/material";

interface CustomTableProps {
  initialRows: any[];
  height?: string;
  width?: string;
  columns: GridColDef[];
  updateFormikField : any ;
  field : string
}

export default function CustomTable({
  initialRows,
  columns: columnProp,
  height = "500px",
  width = "100%",
  updateFormikField ,
  field

}: CustomTableProps) {



  const initialFilters = useMemo(
    () =>
      columnProp.reduce((filters, col) => {
        filters[col.field] = "";
        return filters;
      }, {} as Record<string, string>),
    [columnProp]
  );

  const [filters, setFilters] =
    useState<Record<string, string>>(initialFilters);

  // Handle filter change
  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  // Filter rows dynamically with useMemo
  const filteredRows = useMemo(() => {
    return initialRows.filter((row) =>
      Object.keys(filters).every((key) =>
        String(row[key] || "")
          .toLowerCase()
          .includes(filters[key].toLowerCase())
      )
    );
  }, [initialRows, filters]);

  // Map columns with headers that include filters
  const columns: GridColDef[] = columnProp.map((col) => ({
    field: col.field,
    headerName: col.headerName,
    width: col.width || 150,
    renderHeader: () => (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          size="small"
          placeholder={`Filter ${col.headerName}`}
          value={filters[col.field] || ""}
          onChange={(e) => handleFilterChange(col.field, e.target.value)}
          sx={{ width: "100%" }}
        />
        <Typography>{col.headerName}</Typography>
      </Box>
    ),
  }));

  // Reset Filters
  const resetFilters = () => {
    setFilters(initialFilters);
  };


  const handleRowSelection = (selection: any, d: any) => {
    // alert( d.api.getSelectedRows().get(selection[0])?.title || "none");
    updateFormikField(field , d.api.getSelectedRows().get(selection[0])?.title || "none")
  };

  return (
    <Box sx={{ height, width }}>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" onClick={resetFilters}>
          Reset Filters
        </Button>
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        columnHeaderHeight={100}
        disableColumnMenu
        disableColumnFilter
        disableColumnSorting
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 1 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        onRowSelectionModelChange={handleRowSelection}
      // slots={{
      //   toolbar: GridToolbar,
      // }}
      // slotProps={{
      //   toolbar: {
      //     showQuickFilter: true,
      //     sx : {
      //       m : 2
      //     }
      //   },
      // }}
      />
    </Box>
  );
}
