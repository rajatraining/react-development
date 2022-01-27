import { render } from "@testing-library/react";
import React    from "react";
import template from "./Books.jsx";

function Books(props) {

 // var imageName = require("../../images/product-2.jpg"); // import dynamic 
 // props.image = imageName.default;
 // Props are read only

  console.log(props);
  
  return(
    <div className="books">
    <h1>Books :{props.name}</h1>
    {/* <img src={imageName.default}/> */}
    </div>

  );
 
  
}

export default Books;
