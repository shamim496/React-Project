import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";


// Before
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <App />

);

// After
// ReactDOM.render(<App />, document.getElementById('root'));
