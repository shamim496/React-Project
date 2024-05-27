import React, {useState} from "react";
import Style from "../../assets/css/from.module.css";

export default function From() {

  const [user, setUser] = useState({name: "", email: "", password: ""});
  const {name, email, password} = user;


  const handleChange = (e) => {

    setUser({...user, [e.target.name]: e.target.value});

  }

  const handSubmit = (e) => {
    console.log("from Submited");
    console.log(user)
    e.preventDefault();
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handSubmit}>
        <div className={Style.fromGroup}>
          <label htmlFor="name">Name: </label>
          <input value={name} onChange={handleChange} type="text" name="name" id="name" required/>
        </div>

        <div className={Style.fromGroup}>
          <label htmlFor="email">Email: </label>
          <input value={email} onChange={handleChange} type="email" name="email" id="email" required />
        </div>

        <div className={Style.fromGroup}>
          <label htmlFor="password">Password: </label>
          <input value={password} onChange={handleChange} autoComplete="on" type="password" name="password" id="password" required />
        </div>

        <div className={Style.fromGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}


// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021,
//   color: 'red'
// }

// function myVehicle({brand, model, type, year, color}){
//   console.log(`My` + brand+ `Model` + model);

// }

// myVehicle(vehicleOne);