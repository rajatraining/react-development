import React    from "react";
import template from "./RoutePractice.jsx";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Books from "../Books/Books.js";
import StateHookDemo from "../StateHookDemo.js";
import App from "../../App.js";

class RoutePractice extends React.Component {
  render() {
 
   return template.call(this);
  }

}

export default RoutePractice;
