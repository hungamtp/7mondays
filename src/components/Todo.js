import React , {useState , useEffect} from 'react';
import firebase from '../util/firebase';
import { Paper } from '@material-ui/core';
import "./todo.css";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { TextField , Grid } from '@material-ui/core';
import Task from './Task';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function Todo({ todo }) {
  const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState();
   const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref(`Todo`).child("de");
    var date = new Date();
    const todo = {
      title,
      complete: false,
      date :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    };

    todoRef.push(todo);
  };


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

    useEffect(() => {
    const todoRef = firebase.database().ref(`Todo/${todo.id}`);
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  return (
    <Paper elevation={10} className="task">
      <div className="title-zone">
        <div><b>{todo.id}</b></div>
        <div >{todo.date}</div>
        <DeleteOutlineIcon onClick={deleteTodo} className="delete-todo" fontSize="large"/>
      </div>
      
          <div className="form-todo">
        <TextField
          id="filled-size-small"
          defaultValue="Small"
          size="small"
          onChange={handleOnChange} value={title}
        />

     <PlaylistAddIcon fontSize="small" className="addListIcon" onClick={createTodo}/>
      
    </div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" >
          {todoList
        ? todoList.map((task, index) => <Task  task={task} id={todo.id} key={index} />)
        : ''}

        </Grid>
      </Grid>
      </Grid>

      
    </Paper>
  );
}
