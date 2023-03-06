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
  setOpenNewTask,
  setFormatoTab,
  openNewTask,
  formatoTab,
}) => {
  const [oque, setOque] = React.useState("");
  const [como, setComo] = React.useState("");
  const [quando, setQuando] = React.useState("");
  const [onde, setOnde] = React.useState("");
  const [porque, setPorque] = React.useState("");
  const [quanto, setQuanto] = React.useState("");
  const [status, setStatus] = React.useState("");

  function addRow() {
    setOpenNewTask(false);

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
    formatoTab[0]["dadosTabela2"].push(newTask);
    console.log("Formato atualizado:", formatoTab);
    setFormatoTab(formatoTab);
  }
  return (
    <Dialog
      open={openNewTask}
      display="flex"
      onClose={() => setOpenNewTask(false)}
    >
      <DialogTitle>Nova Atividade</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Adicione uma nova atividade inserindo as informações necessárias
          abaixo:
        </DialogContentText>
        <Grid container spacing={2}>
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
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenNewTask(false)}>Cancelar</Button>
        <Button onClick={addRow}>Adicionar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
