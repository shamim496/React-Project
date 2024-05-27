import React, { useState } from 'react';

const Learn = () => {

    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });


  const {title, desc} = todo;

  return (
    <div>
        <p>{title}</p>
        <p>
            <input
                type="text"
                value={title}
                onChange={(event) => setTodo({
                    ...todo,
                    title: event.target.value,
            })} />
        </p>
        <p>
            <textarea
                name="todo"
                value={desc}
                onChange={(area) => setTodo({
                    ...todo,
                    desc: area.target.value,
                })}>
            </textarea>
        </p>
        <h2></h2>
    </div>
  )
}

export default Learn;
