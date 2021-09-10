import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <Form />
      <TodoList />
    </div>
  );
}
