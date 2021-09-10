import React , {useState , useEffect} from 'react';
import firebase from '../util/firebase';
import "./todo.css";
import { TextField  } from '@material-ui/core';
import Task from './Task';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function Todo({ todo , id , index }) {
  const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState();
   const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref(`Todo`).child(id);
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
    <div elevation={10} className="task">
      <div className="title-zone">
        <div><b>{index}.{todo.id}</b></div>
          <div className="form-todo">
        <TextField
          id="input-task"
          size="small"
          variant="outlined"
          onChange={handleOnChange} value={title}
        />

     <AddIcon fontSize="small" className={title ==="" ?"addListIconHide" :"addListIcon"} onClick={createTodo}/>
      
    </div>
        <DeleteOutlineIcon onClick={deleteTodo} className="delete-todo" fontSize="large"/>
      </div>
      


        {todoList
        ? todoList.map((task, index) =>
          <Task  task={task} id={todo.id} index={index}/>
        )
        : ''}


      
    </div>
  );
}
