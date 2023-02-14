import { Box } from "@mui/material";
import React, { useState } from "react";
import ToDoItem from "../components/ToDoItem";
import { Container } from "@mui/system";
import { List } from "@mui/material";
import Form from "../components/Form";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    console.log(todo);
    //setTodos([...todos, todo]);
  };

  return (
    <Box>
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form todoHandler={todoHandler} />
        <List sx={{ marginTop: "1em" }}>
          {todos.map((todo) => (
            <Box style={{ marginTop: "1em " }}>
              <ToDoItem />
            </Box>
          ))}
        </List>
      </Container>
    </Box>
  );
}
