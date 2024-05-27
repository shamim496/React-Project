import React, { useEffect, useState } from 'react';

const Effect = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    // const [text, setText] = useState('');


    useEffect(()=> {
        console.log('Updating document title');
        document.title = `Clicked ${count} Times`;
    }, [count]);

    useEffect(() => {
        console.log('Starting Time')
        setInterval(tick, 1000);
    }, []);

    const tick = () => {
        setDate(new Date());
    }

    const addClick = () => {
        setCount((preCount) => {
            return (
                preCount + 1
            )
        })
    }

  return (
    <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        {/* <p>
            <input
                type="text"
                value={text}
                onChange={(e) =>
                    setText(e.target.value)
                }
            />
        </p> */}
        <p>
            <button
                type='button'
                onClick={addClick}>
                Click
            </button>
        </p>
    </div>
  )
}

export default Effect;