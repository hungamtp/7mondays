import React, { useState } from 'react';
import firebase from '../util/firebase';
import "./task.css";
import RemoveIcon from '@material-ui/icons/Remove';
import DoneIcon from '@material-ui/icons/Done';
import ReplayIcon from '@material-ui/icons/Replay';
import { Paper } from '@material-ui/core';


export default function Task({task , id}) {
 

      const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(id).child(task.id);
    todoRef.update({
      complete: !task.complete,
    });
  };
  return (
    <Paper className="task-single" elevation={3}>
        <div>{task.title}</div>
        <div className="state" onClick={completeTodo}>{!task.complete ? <DoneIcon /> : <ReplayIcon />}</div>
        
    </Paper>
  );
}
