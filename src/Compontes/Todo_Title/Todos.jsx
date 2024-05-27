import React from 'react';
import Todo from './Todo';

const Todos = (props) => {

  return (

    <div>
      {props.todos.map((itmes, index) => {
        return (
          <Todo key={index} todo={itmes}/>
        )
      })}
    </div>
  )
}

export default Todos;