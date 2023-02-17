import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Stack } from "@mui/system";

function DataGridForTasks() {
  const columnsFromBackend = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "city", headerName: "City", width: 150 },
    { field: "abreviations", headerName: "Abreviations", width: 150 },
    { field: "conference", headerName: "Conference", width: 150 },
    { field: "division", headerName: "Division", width: 150 },
  ];

  const rowsFromBackend = [
    {
      id: 1,
      city: "Teresina",
      abreviation: "Lucas",
      conference: "mui",
      division: "T.I",
    },
    {
      id: 2,
      city: "Teresina",
      abreviation: "Lucas",
      conference: "mui",
      division: "T.I",
    },
    {
      id: 3,
      city: "Teresina",
      abreviation: "Lucas",
      conference: "mui",
      division: "T.I",
    },
  ];

  return (
    <div>
      <CssBaseline />
      <Paper>
        <Stack flexDirection="row" justifyContent="space-between" marginTop="10px" marginRight="10px" marginBottom="10px">
          <Typography variant="h6" component="h2" color="primary" siz>
            Tarefas
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<PersonAddIcon />}
          >
            Nova Tarefa
          </Button>
        </Stack>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            rows={rowsFromBackend}
            columns={columnsFromBackend}
            checkboxSelection
          />
        </div>
      </Paper>
    </div>
  );
}

export default DataGridForTasks;
