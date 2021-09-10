import React  , {useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "./app.css";
import { TextField } from '@material-ui/core';

export default function App() {

  const [x , setX] = useState(12);
  const [y , setY] = useState(12);
  const [authenticated , setAuthenticated] = useState(localStorage.getItem("auth"));
  const [pass , setPass] = useState("");
  const login = () => {
  if(pass==="dit con me may luon"){
    setAuthenticated(true)
    localStorage.setItem("auth" , true);
  }
  }
  const logout = () =>{
    localStorage.removeItem("auth");
    setAuthenticated(false)
  }

  return (
    <div className="App" onMouseMove={(e) => {
      setX(e.clientX);
      setY(e.clientY);
    }}>
      
      {authenticated ? <><Form className="front"/>
      <TodoList className="front"/>
      <button id ="logout" onClick={logout}>&#60;==============================</button>
      </> :<div className="login-form">
      <TextField
          id="filled-size-small"
          size="small"
          type="password"
          onChange={(e) => setPass(e.target.value)} value={pass}
        />
      <button className="loginButton" onClick={login}>==========================&#62; </button>
      </div>}
      <div id ="back" >html:{x}px-{y}px</div>
    </div>
  );
}
