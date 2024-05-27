import React from 'react';
import Todo from './Todo';
import style from './css/todos.module.css';

const Todos = (props) => {
  return (
    <section className={style.todos}>
        {
            props.todo.map((todo) => {
                return (
                    <Todo id={todo.id} todo={todo.todo} key={todo.id} onRemoveitem={props.onRemoveTodo}/>
                )
            })
        }
    </section>
  )
}

export default Todos