import react from "react";
import ReactDom from "react-dom";
import LoginComponent from "./App.jsx";
import IndependentTimer from "./Timer.jsx";

ReactDom.render(<LoginComponent/>,document.getElementById("loginPage"));
ReactDOM.render(<IndependentTimer/>,document.getElementById("timer"));
