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
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddTask from "./AddTask";
import { Button, Stack } from "@mui/material";
import setOpenNewTask from "./AddTask";

//cria um objeto com as informações de uma linha da tabela
function dadosTabela(ID, PROJETO, dadosTabela2) {
  return {
    ID,
    PROJETO,
    dadosTabela2,
  };
}

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

  const [openNewTask, setOpenNewTask] = React.useState(false);

  return (
    <React.Fragment>
      <AddTask
        setFormatoTab={props.setFormatoTab}
        formatoTab={props.formatoTab}
        openNewTask={openNewTask}
        setOpenNewTask={setOpenNewTask}
      />
      {/* cria a linha da tabela */}
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* cria um botão para expandir/contrair a linha */}
        <Stack flexDirection="row" gap="15px" alignItems="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {/* ícone de seta para cima ou para baixo, dependendo se a linha está aberta ou fechada */}
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Typography>Sprint 1</Typography>
        </Stack>
      </TableRow>
      {/* cria uma segunda linha que será exibida quando a primeira linha estiver aberta */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
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
                  {row.dadosTabela2.map((dadosTabela2Row) => (
                    <TableRow key={dadosTabela2Row.OQUE}>
                      <TableCell>{dadosTabela2Row.OQUE}</TableCell>
                      <TableCell>{dadosTabela2Row.COMO}</TableCell>
                      <TableCell>{dadosTabela2Row.QUANDO}</TableCell>
                      <TableCell>{dadosTabela2Row.ONDE}</TableCell>
                      <TableCell>{dadosTabela2Row.PORQUE}</TableCell>
                      <TableCell>{dadosTabela2Row.QUANTO}</TableCell>
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
                              value={dadosTabela2Row.STATUS}
                              sx={{
                                height: "20px",
                                ".MuiLinearProgress-bar1Buffer": {
                                  backgroundColor: getProgressColor(
                                    dadosTabela2Row.STATUS
                                  ),
                                },
                                ".MuiLinearProgress-bar2Buffer": {
                                  backgroundColor: getProgressColor(
                                    dadosTabela2Row.STATUS
                                  ),
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
                              {`${Math.round(dadosTabela2Row.STATUS)}%`}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<DeleteOutlinedIcon />}
                          size="small"
                        >
                          Excluir Atividade
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<AddTaskIcon />}
                    size="small"
                    onClick={() => setOpenNewTask(true)}
                  >
                    Nova Atividade
                  </Button>
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
  const [formatoTab, setFormatoTab] = React.useState([
    dadosTabela(1, "SGM", [
      {
        OQUE: "Melhorar a autogestão",
        COMO: "Através da ferramenta",
        QUANDO: "Março/23",
        ONDE: "Todas as filiais",
        PORQUE: "Desorganização",
        QUANTO: "R$ 500,00",
        STATUS: 50,
      },
      {
        OQUE: "Treinamento de novos funcionários",
        COMO: "Através de apresentações e estudos de casos",
        QUANDO: "Abril/23",
        ONDE: "Sede da empresa",
        PORQUE: "Aumentar a eficiência dos novos funcionários",
        QUANTO: "Zero custo",
        STATUS: 80,
      },
    ]),
  ]);

  return (
    <Table aria-label="collapsible table">
      <TableHead>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddTaskIcon />}
          size="small"
          onClick={() => setOpenNewTask(true)}
        >
          Nova Sessão
        </Button>
      </TableHead>
      <TableBody>
        {formatoTab.map((row) => (
          <Row
            setFormatoTab={setFormatoTab}
            formatoTab={formatoTab}
            key={row.ID}
            row={row}
          />
        ))}
      </TableBody>
    </Table>
  );
}
