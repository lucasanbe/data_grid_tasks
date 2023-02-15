import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Paper } from "@mui/material";
import EditDialog from "./EditDialog";
import { useState } from "react";

export default function ToDoItem({todo, deletetoDo, edittoDo}) {

const [openDialog, setOpenDialog] = useState(false)

const dialogHandler = () => {
  setOpenDialog(!openDialog)
}



  return (
    <>
    <EditDialog edittoDo={edittoDo} open={openDialog} dialogHandler={dialogHandler} todo={todo}/>
    <Paper style={{padding: "0.5em 0em"}}>
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deletetoDo(todo.id)}>
          <DeleteSweepIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary = {todo.text} onClick={() => setOpenDialog(true)}/>
      </ListItemButton>
    </ListItem>
    </Paper>
    </>
  );
}
