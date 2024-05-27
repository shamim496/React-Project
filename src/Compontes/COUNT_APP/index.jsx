import React, {useState} from 'react';

const intialValue = 0;

const Counter = () => {

    const [count, setCount] = useState(intialValue);

    const inCrement = () => {
        setCount((incrementValue) => incrementValue + 10);
    }

    const deCrement = () => {
        setCount((decrementValue) => decrementValue - 10);
    }

    const resetBtn = () => {
        setCount(intialValue);
    }


    return (
        <div className="counter center">
            <h1 className="counter__title">Counter App</h1>
            <div className="card center">
                <h2 className="card__title">Count: {count}</h2>
                <div className="card__btns">
                    <button onClick={inCrement} className="btn card__btn">+ 10</button>
                    <button onClick={deCrement} className="btn card__btn">- 10</button>
                    <button onClick={resetBtn} className="btn card__btn">Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
