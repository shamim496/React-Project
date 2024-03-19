import React from "react";
import { v4 as uuidv4 } from "uuid";

const users = [
    {
        id: uuidv4(),
        fullName: "Shamim Hasan",
        age: 32,
        phones: [
            { home: "01780900241" },
            { office: "6349802" },
        ]
    },
    {
        id: uuidv4(),
        fullName: "Shohid",
        age: 32,
        phones: [
            { home: "01906670313" },
            { office: "9959802" },
        ]
    }
]


export default function Nested() {
    return (
        <div>
            <h1>Nested Lists</h1>
            {
                users.map((user)=> {
                    const {id, fullName, age} = user;
                    return (
                        <article key={id}>
                            <h3>Name: {fullName}</h3>
                            <p>Age: {age}</p>
                            {
                                user.phones.map((phone, index)=> {
                                    const {home, office}  = phone;
                                    return (
                                        <div key={index}>
                                            <h3>{home}</h3>
                                            <p>{office}</p>
                                        </div>
                                    )
                                })
                            }
                        </article>
                    )
                })
            }
        </div>
    )
}