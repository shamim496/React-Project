import React, { useState } from 'react';
import style from './css/newtodo.module.css';

const NewTodo = (props) => {

  const [todo, setTodo] = useState({title: "", desc: ""});
  const {title, desc} = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo, [name]: event.target.value}
    })
  }


  const handleSumbit = (event) => {
    event.preventDefault();
    props.onaddTodo(todo);
    setTodo({title: "", desc: ""});
  }

  return (
    <form className={style.form} onSubmit={handleSumbit}>
          <div className={style["form-field"]}>
            <label htmlFor='title'>Title: </label>
            <input onChange={handleChange} type='text' id='title' name='title' value={title} />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc'>desc: </label>
            <textarea onChange={handleChange} type='text' id='desc' name='desc' value={desc}/>
          </div>
          <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo;