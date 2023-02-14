import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Paper } from "@mui/material";

export default function ToDoItem() {
  return (
    <Paper>
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
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
        <ListItemText primary = {`Line Item`}/>
      </ListItemButton>
    </ListItem>
    </Paper>
  );
}
