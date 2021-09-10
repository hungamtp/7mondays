import React from 'react';
import firebase from '../util/firebase';
import { Paper } from '@material-ui/core';


export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <Paper elevation={10} className="task">
      <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
      <h1 className={todo.complete ? 'complete' : ''}>{todo.date}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
    </Paper>
  );
}
