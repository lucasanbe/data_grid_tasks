import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditDialog({ open, dialogHandler, todo, edittoDo }) {
  const [editedText, seteditedText] = React.useState(todo.text);

  const textHandler = () => {
    edittoDo(todo.id, editedText);
    dialogHandler()
  };

  return (
    <Dialog open={open} onClose={dialogHandler}>
      <DialogTitle>Editando Tarefa</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Digite abaixo o novo texto da tarefa:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          defaultValue={editedText}
          onChange={(e) => seteditedText(e.target.value)}
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancelar</Button>
        <Button onClick={textHandler}>Editar</Button>
      </DialogActions>
    </Dialog>
  );
}
