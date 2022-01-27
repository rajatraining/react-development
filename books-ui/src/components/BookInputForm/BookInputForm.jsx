import "./BookInputForm.css";
import React from "react";

function template() {
  return (
    <div className="book-input-form">
     <form>
       <label>Enter the ID:</label>
       <input type={"text"} name="id" />

       <input type={"submit"} value={"Add new Book"} />
     </form>
    </div>
  );
};

export default template;
