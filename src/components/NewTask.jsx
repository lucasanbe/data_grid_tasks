import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import Row from "./CollapsibleTable";
import dadosTabela2 from "./CollapsibleTable";
import dadosTabela from "./CollapsibleTable";

export default function AddTask({ setOpenNewTask, openNewTask, setData }) {
  function addRow() {
    setOpenNewTask(false);
    const newTask = {
      OQUE: document.getElementById("OQUE").value,
      COMO: document.getElementById("COMO").value,
      QUANDO: document.getElementById("QUANDO").value,
      ONDE: document.getElementById("ONDE").value,
      PORQUE: document.getElementById("PORQUE").value,
      QUANTO: document.getElementById("QUANTO").value,
      STATUS: document.getElementById("STATUS").value,
    };
    setData((data) => {
      const lastData = data[data.length - 1];
      const newData = dadosTabela(
        lastData.ID,
        lastData.COLABORADOR,
        lastData.CARGO,
        lastData.AREA,
        lastData.FILIAL,
        [...lastData.dadosTabela2, dadosTabela2[{newTask}]], // adiciona a nova atividade
      );
      return [...data.slice(0, -1), newData];
    });
  }
  return (
    <div>
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
                autoFocus
                margin="dense"
                id="OQUE"
                label="O que?"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="COMO"
                label="Como?"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="QUANDO"
                label="Quando?"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="ONDE"
                label="Onde?"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="PORQUE"
                label="Por que?"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="QUANTO"
                label="Quanto?"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
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
          <Button onClick={() => setOpenNewTask(false)}>Cancel</Button>
          <Button onClick={addRow}>Adicionar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
