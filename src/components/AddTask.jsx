import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";

const AddTask = ({
  setOpenModal,
  setListTasks,
  openModal,
  listTasks,
  isCheck,
}) => {
  const [oque, setOque] = React.useState("");
  const [como, setComo] = React.useState("");
  const [quando, setQuando] = React.useState("");
  const [onde, setOnde] = React.useState("");
  const [porque, setPorque] = React.useState("");
  const [quanto, setQuanto] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [session, setSession] = React.useState("");

  function addSession() {
    setOpenModal(false);
    const newSession = { session, dadosTabela: [] };
    setListTasks((tasks) => [tasks, ...newSession]);
  }

  function addTask() {
    setOpenModal(false);

    const newTask = {
      OQUE: oque,
      COMO: como,
      QUANDO: quando,
      ONDE: onde,
      PORQUE: porque,
      QUANTO: quanto,
      STATUS: status,
    };
    console.log("Nova tarefa:", newTask);
    listTasks[0]["dadosTabela"].push(newTask);
    console.log("Formato atualizado:", listTasks);
    setListTasks(listTasks);
  }
  return (
    <Dialog open={openModal} display="flex" onClose={() => setOpenModal(false)}>
      <DialogTitle>{isCheck ? "Nova Atividade" : "Nova Sessão"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Adicione uma nova atividade inserindo as informações necessárias
          abaixo:
        </DialogContentText>
        <Grid container spacing={2}>
          {isCheck ? (
            <>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setOque(e.target.value)}
                  autoFocus
                  margin="dense"
                  id="OQUE"
                  label="O que?"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setComo(e.target.value)}
                  autoFocus
                  margin="dense"
                  id="COMO"
                  label="Como?"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setQuando(e.target.value)}
                  autoFocus
                  margin="dense"
                  id="QUANDO"
                  label="Quando?"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setOnde(e.target.value)}
                  autoFocus
                  margin="dense"
                  id="ONDE"
                  label="Onde?"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setPorque(e.target.value)}
                  autoFocus
                  margin="dense"
                  id="PORQUE"
                  label="Por que?"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setQuanto(e.target.value)}
                  autoFocus
                  margin="dense"
                  id="QUANTO"
                  label="Quanto?"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setStatus(e.target.value)}
                  autoFocus
                  margin="dense"
                  id="STATUS"
                  label="Qual status?"
                  variant="standard"
                />
              </Grid>
            </>
          ) : (
            <Grid item xs={6}>
              <TextField
                onChange={(e) => setSession(e.target.value)}
                autoFocus
                margin="dense"
                id="SESSÃO"
                label="Qual o nome da nova sessão?"
                variant="standard"
              />
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
        <Button onClick={() => (isCheck ? addTask() : addSession())}>
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
