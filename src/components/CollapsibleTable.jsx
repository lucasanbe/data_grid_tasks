import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "@material-ui/core";
import AddTaskIcon from "@mui/icons-material/AddTask";

//cria um objeto com as informações de uma linha da tabela
function dadosTabela1(
  ID,
  COLABORADOR,
  CARGO,
  AREA,
  FILIAL,
  OQUE,
  COMO,
  QUANDO,
  ONDE,
  PORQUE,
  QUANTO,
  STATUS
) {
  return {
    ID,
    COLABORADOR,
    CARGO,
    AREA,
    FILIAL,
    OQUE,
    COMO,
    QUANDO,
    ONDE,
    PORQUE,
    QUANTO,
    STATUS,
  };
}

// cria um array de objetos com as informações das linhas da tabela
const linhas_tab1 = [
  dadosTabela1(
    1,
    "Lucas",
    "Analista de Sistema",
    "NIT",
    "EC THE",
    "Melhorar a autogestão",
    "Através da ferramenta",
    "Março/23",
    "Todas as filiais",
    "Desorganização",
    "Zero",
    50
  ),
];

function getProgressColor(status) {
  if (status < 30) {
    return "#f44336"; // vermelho
  } else if (status >= 30 && status <= 70) {
    return "#efbb5aa3"; // amarelo
  } else {
    return "#088208a3"; // verde
  }
}

function Row(props) {
  // recebe a propriedade "row" que contém os dados da linha
  const { row } = props;
  // cria um estado "open" inicialmente falso para controlar se a linha está aberta ou fechada
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      {/* cria a linha da tabela */}
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* cria um botão para expandir/contrair a linha */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {/* ícone de seta para cima ou para baixo, dependendo se a linha está aberta ou fechada */}
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.ID}</TableCell>
        <TableCell>{row.COLABORADOR}</TableCell>
        <TableCell>{row.CARGO}</TableCell>
        <TableCell>{row.AREA}</TableCell>
        <TableCell>{row.FILIAL}</TableCell>
      </TableRow>
      {/* cria uma segunda linha que será exibida quando a primeira linha estiver aberta */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                component="h2"
                color="primary"
                marginBottom="10px"
              >
                Atividades
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AddTaskIcon />}
                size="small"
              >
                Nova Atividade
              </Button>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>O QUÊ?</TableCell>
                    <TableCell>COMO?</TableCell>
                    <TableCell>QUANDO?</TableCell>
                    <TableCell>ONDE?</TableCell>
                    <TableCell>POR QUE?</TableCell>
                    <TableCell>QUANTO?</TableCell>
                    <TableCell>STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{row.OQUE}</TableCell>
                    <TableCell>{row.COMO}</TableCell>
                    <TableCell>{row.QUANDO}</TableCell>
                    <TableCell>{row.ONDE}</TableCell>
                    <TableCell>{row.PORQUE}</TableCell>
                    <TableCell>{row.QUANTO}</TableCell>
                    <TableCell>
                      {/*insere linear progress na atividade}*/}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Box sx={{ width: "100%", mr: 1 }}>
                          <LinearProgress
                            variant="buffer"
                            value={row.STATUS}
                            sx={{
                              height: "20px",
                              ".MuiLinearProgress-bar1Buffer": {
                                backgroundColor: getProgressColor(row.STATUS),
                              },
                              ".MuiLinearProgress-bar2Buffer": {
                                backgroundColor: getProgressColor(row.STATUS),
                                opacity: 0.6,
                              },
                              ".css-8ub8io-MuiLinearProgress-dashed": {
                                backgroundImage: "none",
                              },
                            }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 10 }}>
                          <Typography variant="body2" color="text.secondary">
                            {`${Math.round(row.STATUS)}%`}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//retorna a criação de uma tabela com uma linha expansível para cada item no array rows.
export default function CollapsibleTable() {
  return (
    <Box>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Colaborador</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Área</TableCell>
            <TableCell>Filial</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {linhas_tab1.map((row) => (
            <Row key={row.ID} row={row} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
