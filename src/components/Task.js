import React from 'react';
import firebase from '../util/firebase';
import "./task.css";
import DoneIcon from '@material-ui/icons/Done';
import ReplayIcon from '@material-ui/icons/Replay';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


export default function Task({task , index , id}) {
 

      const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(id).child(task.id);
    todoRef.update({
      complete: !task.complete,
    });
  };
   const deleteTask = () => {
    const todoRef = firebase.database().ref('Todo').child(id).child(task.id);
    todoRef.remove();
  };
  return (
    <div className="task-single" >
        <div>{index}.{task.title}</div>
        <div className="icon">
        <DeleteOutlineIcon onClick={deleteTask} className="deleteIcon" />
 <div className="state" onClick={completeTodo}>{!task.complete ? <DoneIcon /> : <ReplayIcon />}</div>
        </div>
       
        
    </div>
  );
}
