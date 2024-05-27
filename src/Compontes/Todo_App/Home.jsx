import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Todos from './Todos';
import NewTodo from './NewTodo';
import style from './css/home.module.css';


const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo}]
    })
  }

  const handleRemoveTodo = (id) => {
    alert(id); 
  }

  return (
    <div className={style.container}>
      <h1 style={{color: 'white'}}>Todo App</h1>
      <NewTodo onaddTodo={handleTodo}/>
        <Todos todo={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home