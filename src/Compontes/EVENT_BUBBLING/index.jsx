import React, {useState} from "react";

export default function EVENT_BUBBLING() {

    const [count, setCount] = useState(0);

    const handClick = () => {
        setCount((value) => {
            console.log(value);
           return value + 1
        })
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handClick}>Increment</button>
    </div>
  )
}
