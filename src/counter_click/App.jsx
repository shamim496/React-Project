import React from 'react';
import CounterClick from '../Compontes/Counter_Click/CounterClick';
import HoverCounter from '../Compontes/Counter_Click/HoverCounter';
import User from '../Compontes/Counter_Click/User';
import Counter from '../Compontes/Counter_Click/Counter';

function App() {
  return (
    <div>
      <CounterClick />
      <HoverCounter />
      {/* <User render={(isLoggedIn)=> (isLoggedIn ? 'Shamim Hasan' : 'Guest')}/> */}
      <Counter render={(counter, incrementCount) => <CounterClick counter={counter} incrementCount={incrementCount}/>}/>
    </div>
  )
}

export default App;
