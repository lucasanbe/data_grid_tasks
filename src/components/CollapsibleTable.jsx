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

//cria um objeto com as informações de uma linha da tabela
function dadosTabela(session, dadosTabela) {
  return {
    session,
    dadosTabela,
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

function Session(props) {
  // recebe a propriedade "row" que contém os dados da linha
  const { row, setListTasks, listTasks, isCheck, openModal, setOpenModal } =
    props;
  // cria um estado "open" inicialmente falso para controlar se a linha está aberta ou fechada
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AddTask
        setListTasks={setListTasks}
        listTasks={listTasks}
        openModal={openModal}
        setOpenModal={setOpenModal}
        isCheck={isCheck}
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
          <Typography>{row.session}</Typography>
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
                  {row.dadosTabela.map((tasks, index) => (
                    <TableRow key={index}>
                      <TableCell>{tasks.OQUE}</TableCell>
                      <TableCell>{tasks.COMO}</TableCell>
                      <TableCell>{tasks.QUANDO}</TableCell>
                      <TableCell>{tasks.ONDE}</TableCell>
                      <TableCell>{tasks.PORQUE}</TableCell>
                      <TableCell>{tasks.QUANTO}</TableCell>
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
                              value={tasks.STATUS}
                              sx={{
                                height: "20px",
                                ".MuiLinearProgress-bar1Buffer": {
                                  backgroundColor: getProgressColor(
                                    tasks.STATUS
                                  ),
                                },
                                ".MuiLinearProgress-bar2Buffer": {
                                  backgroundColor: getProgressColor(
                                    tasks.STATUS
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
                              {`${Math.round(tasks.STATUS)}%`}
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
                          onClick={() => {
                            const taskIndex = row.dadosTabela.findIndex(
                              (task) => task.ID === tasks.ID
                            );
                            const newTasks = [...row.dadosTabela];
                            newTasks.splice(taskIndex, 1);
                            const newListTasks = [...listTasks];
                            newListTasks[newListTasks.indexOf(row)] = {
                              ...row,
                              dadosTabela: newTasks,
                            };
                            setListTasks(newListTasks);
                          }}
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
                    onClick={() => setOpenModal(true)}
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
  const [openModalSession, setOpenModalSession] = React.useState(false);
  const [openModalTask, setOpenModalTask] = React.useState(false);

  const [listTasks, setListTasks] = React.useState([
    dadosTabela("Sprint 1", [
      {
        ID: 0,
        OQUE: "Melhorar a autogestão",
        COMO: "Através da ferramenta",
        QUANDO: "Março/23",
        ONDE: "Todas as filiais",
        PORQUE: "Desorganização",
        QUANTO: "R$ 500,00",
        STATUS: 50,
      },
      {
        ID: 1,
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
    <Box>
      <AddTask
        setListTasks={setListTasks}
        listTasks={listTasks}
        isCheck={false}
        setOpenModal={setOpenModalSession}
        openModal={openModalSession}
      />

      <Table aria-label="collapsible table">
        <TableHead>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddTaskIcon />}
            size="small"
            onClick={() => setOpenModalSession(true)}
          >
            Nova Sessão
          </Button>
        </TableHead>
        <TableBody>
          {listTasks.map((row, index) => (
            <Session
              setListTasks={setListTasks}
              listTasks={listTasks}
              key={index}
              row={row}
              isCheck={true}
              setOpenModal={setOpenModalTask}
              openModal={openModalTask}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
