import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <p>
            <button
                type='button'
                onClick={() => setCount(
                    count + 1,
                )}>Add 1
            </button>
        </p>
    </div>
  )
}

export default Counter