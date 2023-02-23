import React from "react";
import { Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Stack from "@mui/material/Stack";
import { Accordion as MyAccordion } from "@mui/material";
import { AccordionSummary as MyAccordionSummary } from "@mui/material";
import { AccordionDetails as MyAccordionDetails } from "@mui/material";
import { useState } from "react";

const Accordion = styled(MyAccordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MyAccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MyAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CustomAccordionCellRenderer({ params }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MyAccordion
      expanded={expanded === params.row.id}
      onChange={handleChange(params.row.id)}
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    >
      <MyAccordionSummary
        aria-controls={`panel${params.row.id}-content`}
        id={`panel${params.row.id}-header`}
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      >
        <Typography>Collapsible Group Item #1</Typography>
      </MyAccordionSummary>
      <MyAccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </MyAccordionDetails>
    </MyAccordion>
  );
}

function DataGridForTasks() {
  const columnsFromBackend = [
    {
      field: "acordion",
      headerName: "",
      width: 90,
      height: 150,
      renderCell: (params) => CustomAccordionCellRenderer({ params }),
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
  ];
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
        <Box style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rowsFromBackend} columns={columnsFromBackend} />
        </Box>
      </Paper>
    </div>
  );
}

export default DataGridForTasks;
