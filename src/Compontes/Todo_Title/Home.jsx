import React, {useState} from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = ["Todos 1", "Todos 2"];

const Home = () => {

  const [todos, setTodos] = useState(dummyTodos);

  const handNewtodo = (newTodo) => {
    setTodos([...todos, newTodo ])
  }

  return (
    <div>
      <NewTodo onTodo={handNewtodo} />
      <Todos todos={todos} />
    </div>
  )
}

export default Home;