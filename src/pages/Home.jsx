import ToDoItem from "../components/ToDoItem";
import { Container } from "@mui/system";
import { Box, List } from "@mui/material";
import Form from "../components/Form";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addtoDo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deletetoDo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const edittoDo = (id, editedText) => {
    var todosArray = [...todos];
    for (var i in todosArray){
      if (todosArray[i].id === id){
        todosArray[i].text = editedText
      }
    }
    // todos.splice(id, 1, { text: editedText, id: id });
    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addtoDo={addtoDo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <Box key={todo.id} style={{ marginTop: "1em" }}>
            <ToDoItem edittoDo={edittoDo} todo={todo} deletetoDo={deletetoDo} />
          </Box>
        ))}
      </List>
    </Container>
  );
}
