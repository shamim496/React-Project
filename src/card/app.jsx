import React from "react";
import Card from "../compoent/card/card";
import Data from "../compoent/card/json/data.json";

function App() {

    return <div>
        <h1 className="headingStyle">Todo App</h1>
        {Data.map((value, index) => {
            return (

                <Card key={index} titleText={value.title} descText={value.desc}/>
            )
        }
        )}
    </div>
}


export default App;