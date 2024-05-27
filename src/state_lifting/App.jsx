import React from 'react';
import Child from '../Compontes/STATE_LIFTING/Child';

export default function App() {

    const data = "I am from parent (App)";

    const handler = (childData) => {
        console.log("App: " + childData);
    }

  return (
    <div>
          <Child data={data} onChildata={handler}/>
    </div>
  )
}
