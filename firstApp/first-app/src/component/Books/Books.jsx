import "./Books.css";
import React from "react";


function template() {
 
  return (
    <div className="books">
      <h1>Books :{this.props.name}</h1>
      <img src={this.props.image}/>
    </div>
  );
};

export default template;
