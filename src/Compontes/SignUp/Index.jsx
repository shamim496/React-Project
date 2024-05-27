import React, { Component } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

class SignUp extends Component {
    constructor(props) {
      super(props)

      this.state = {
         isLogin : false
      }
    }


  render() {
    const {isLogin} = this.state;


  return(
    <div>
          {isLogin ? <HomePage /> : <LoginPage />}
    </div>
  )

  }
}

export default SignUp;
