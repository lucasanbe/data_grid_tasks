import React from "react";
import { TextField, Button, Paper } from "@mui/material";

export default function Form() {
  return (
    <Paper>
      <TextField id="filled-basic" label="Tarefa" variant="filled" />
      <Button variant="contained">Add</Button>
    </Paper>
  );
}
