import "./BookForm.css";
import React from "react";
import {Form, Button} from "react-bootstrap"

function template() {
  return (
    <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Id </Form.Label>
          <Form.Control type="text" name="bookid" placeholder="Enter BookId" value={this.state.bookId} onChange={this.handleBookId}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name </Form.Label>
          <Form.Control type="text" name="bookNAme" placeholder="Enter BookName" value={this.state.bookName} onChange={this.handleBookName}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author of Book </Form.Label>
          <Form.Control type="text" name="author" placeholder="Enter Author" value={this.state.author} onChange={this.handleAuthor}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price </Form.Label>
          <Form.Control type="text" name="price" placeholder="Enter Price" value={this.state.price} onChange={this.handlePrice}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>

  );
};

export default template;
