import "./BooksFromService.css";
import React from "react";



function template() {
  console.log(this.state);
 
  const bookItems = this.state;
  console.log(bookItems);
  
  return (
    <div className="books-from-service">


      <h1>BooksFromService</h1>
      <img src="./images/image1.jpeg"/>

    
    
    <ul>
    {this.state.items.map(item =>(
        <li key={item.id}>  {item.bookName} -- {item.author} -- {item.price}</li>
      ))}
    </ul>
     
    </div>
  );
};

export default template;
