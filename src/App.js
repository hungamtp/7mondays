import React  , {useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "./app.css";

export default function App() {

  const [x , setX] = useState(12);
  const [y , setY] = useState(12);

  return (
    <div className="App" onMouseMove={(e) => {
      setX(e.clientX);
      setY(e.clientY);
    }}>
      <div id ="back" >html{x}-{y}</div>
      <Form />
      <TodoList />
    </div>
  );
}
