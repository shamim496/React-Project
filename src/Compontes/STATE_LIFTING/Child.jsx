import React from 'react';

export default function Child(props) {

const data = "I am from child component";

props.onChildata(data);

  return (
    <div>
        <p>I am child Component</p>
        <p>{props.data}</p>
    </div>
  )
}
