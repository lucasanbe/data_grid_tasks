import React, { useState } from "react";
import { TextField, Button, Paper, Box } from "@mui/material";

export default function Form({ addtoDo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addtoDo(todoObj);
    document.getElementById("filled-basic").value = null;
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="filled-basic"
          label="Tarefa"
          variant="filled"
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button variant="text" onClick={() => todoCreate(text)}>
          Add
        </Button>
      </Box>
    </Paper>
  );
}
