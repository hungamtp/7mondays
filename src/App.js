import React  , {useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "./app.css";
import { Button, TextField } from '@material-ui/core';

export default function App() {

  const [x , setX] = useState(12);
  const [y , setY] = useState(12);
  const [authenticated , setAuthenticated] = useState(false);
  const [pass , setPass] = useState("");
  const login = () => {
  if(pass==="dit con me may luon"){
    setAuthenticated(true)
  }
  }

  return (
    <div className="App" onMouseMove={(e) => {
      setX(e.clientX);
      setY(e.clientY);
    }}>
      <div id ="back" >html{x}-{y}</div>
      {authenticated ? <><Form className="front"/>
      <TodoList className="front"/></> :<div className="login-form">
      <TextField
          id="filled-size-small"
          size="small"
          type="password"
          onChange={(e) => setPass(e.target.value)} value={pass}
        />
      <button className="loginButton" onClick={login}>==========================> </button>
      </div>}
      
    </div>
  );
}
