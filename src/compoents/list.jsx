import React from "react";
import { v4 as uuidv4 } from "uuid"; //unique id import

const todos = [
    {
        id: uuidv4(),
        title: "title1",
        desc: "this is desc1",
    },
    {
        id: uuidv4(),
        title: "title2",
        desc: "this is desc2",
    },
    {
        id: uuidv4(),
        title: "title3",
        desc: "this is desc3",
    },
    {
        id: uuidv4(),
        title: "title4",
        desc: "this is desc4",
    },
    {
        id: uuidv4(),
        title: "title5",
        desc: "this is desc5",
    },

];

const List = () => {
    // console.log(uuidv4());
    return (
        <div>
            {todos.map((item) => {
                const {id, title, desc} =  item;
                return <div key = {id}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            })}
        </div>
    );
}

export default List;