import React, { useState } from 'react';
import firebase from '../util/firebase';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';
import "./form.css";


export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  var date = new Date();
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(title);
    var date = new Date();
    const todo = {
      title,
      complete: false,
      date :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
    };

    todoRef.push(todo);
  };
  return (
    <div className="form">
        <TextField
          label="Task"
          id="filled-size-small"
          defaultValue="Small"
          size="small"
          onChange={handleOnChange} value={title}
        />
     <AddIcon onClick={createTodo}  id={title === "" ?  "hideAddIcon" : "addIcon"}/>
      
    </div>
  );
}
