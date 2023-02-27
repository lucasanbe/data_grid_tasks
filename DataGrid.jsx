import React, { useState } from "react";
import { Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Slide from "./Slide";

function DataGridForTasks() {
  const [expansionState, setExpansionState] = useState({});

  const columnsFromBackend = [
    {
      field: "acordion",
      headerName: "",
      width: 90,
      height: 150,
      renderCell: (params) => {
        return (
          <Slide
            isExpanded={expansionState[params.rowIndex]}
            setIsExpanded={(value) =>
              setExpansionState({ ...expansionState, [params.rowIndex]: value })
            }
            isAccordion={params.rowIndex}
            expansionState={expansionState}
            setExpansionState={setExpansionState}
          />
        );
      },
    },
    { field: "id", headerName: "Id", width: 90 },
    { field: "who", headerName: "Quem?", width: 150 },
    { field: "what", headerName: "O quê?", width: 150 },
    { field: "how", headerName: "Como?", width: 150 },
    { field: "when", headerName: "Quando?", width: 150 },
    { field: "where", headerName: "Onde?", width: 150 },
    { field: "why", headerName: "Por que?", width: 150 },
    { field: "howmuch", headerName: "Quanto?", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        var color = "";
        if (params.value < 30) {
          color = "#f44336";
        }
        if (params.value >= 30 && params.value <= 70) {
          color = "#efbb5aa3";
        }
        if (params.value > 70) {
          color = "#088208a3";
        }
        return (
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="buffer"
                value={params.value}
                sx={{
                  height: "20px",
                  ".MuiLinearProgress-bar1Buffer": {
                    backgroundColor: color,
                  },
                  ".MuiLinearProgress-bar2Buffer": {
                    backgroundColor: color,
                    opacity: 0.6,
                  },
                  ".css-8ub8io-MuiLinearProgress-dashed": {
                    backgroundImage: "none",
                  },
                }}
              />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                params.value
              )}%`}</Typography>
            </Box>
          </Box>
        );
      },
    },
  ];
  const rowsFromBackend = [
    {
      acordion: 1,
      id: 1,
      who: "Lucas",
      what: "5w2h",
      how: "Javascript",
      when: "24/02/2023",
      where: "DM",
      why: "Autogestão",
      howmuch: "Sem custos",
      status: 71,
    },
    {
      acordion: 2,
      id: 2,
      who: "Lucas",
      what: "5w2h",
      how: "Javascript",
      when: "24/02/2023",
      where: "DM",
      why: "Autogestão",
      howmuch: "Sem custos",
      status: 71,
    },
  ];
  const getRowClassName = (params) => {
    if (params.row.id === 1) {
      return 'custom-row-class';
    }
    return '';
  };

  // Definindo propriedades customizadas para a row
  const getRowProps = (params) => {
    if (params.row.id === 1) {
      return {
        style: { backgroundColor: 'yellow' },
        onClick: () => alert(`Clicked row with id ${params.id}`),
      };
    }
    return {};
  };
  return (
    <div>
      <CssBaseline />
      <Paper>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          marginTop="10px"
          marginRight="10px"
          marginBottom="10px"
        >
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
            getRowClassName={getRowClassName}
            getRowProps={getRowProps}
            rows={rowsFromBackend}
            columns={columnsFromBackend}
          />
        </div>
      </Paper>
    </div>
  );
}

export default DataGridForTasks;
