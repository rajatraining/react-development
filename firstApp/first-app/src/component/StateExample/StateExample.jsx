import "./StateExample.css";
import React from "react";
import StateExample from "./StateExample";
import { MDBDataTableV5, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";



function template() {
  return (
    <div className="state-example">
      <h1>{this.state.message}</h1>
      <input type="email" id="defaultFormLoginEmailEx" className="form-control"
        onChange={this.loadMessage} value={this.state.message} />

      <div><input value="Click to Load Books" type="button" onClick={this.getBooksList}>
      </input></div>


      {/* <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.datatable} /> */}

      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
          {this.state.bookslist.map(book => (
          <tr>
            <td>
            {book.id}
            </td>
            <td>
            {book.bookName}
            </td>
            <td>
            {book.author}
            </td>
            <td>
            {book.price}
            </td>
          </tr>
          
          )
        )}
           
          </MDBTableBody>
        </MDBTable>





      

      </div>



    </div>
  );
};

export default template;
