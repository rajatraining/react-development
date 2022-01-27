import "./Books.css";
import React from "react";

function template() {

  let items = this.state.items; 
  let itemElement=[]
  console.log(items);
  for(var i=0; i<items.length; i++)
  {
    itemElement.push(<li>Name : {items[i].bookName}</li>);
  }

  
  return (
    <div className="books">
      <h1>Books : {this.props.name}</h1>
      <ul>
        {itemElement}
      </ul>
    </div>
  );
};

export default template;
