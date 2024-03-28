import React, {useState} from "react";

function USE_STATE2() {

    const [count, setCount] = useState(0);
    const inCrement = () => {
        setCount (count + 1);
    }

    const deCrement = () => {
        setCount (count - 1);
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={inCrement}>Increment</button>
            <button onClick={deCrement}>Decrement</button>
        </div>
    )
}

export default USE_STATE2;