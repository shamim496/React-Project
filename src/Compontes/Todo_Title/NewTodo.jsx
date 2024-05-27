import React, {useState} from 'react';

const NewTodo = (props) => {
    const [todo, setTodo] = useState("");

    const handInput = (e) => {
        setTodo(e.target.value);
    }

    const handSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    }

  return (
    <div>
        <form onSubmit={handSubmit}>
            <label htmlFor='todo'>New Todo: </label>
            <input type='text' id='todo' name='todo' value={todo} onChange={handInput}/>
            <button>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodo; 