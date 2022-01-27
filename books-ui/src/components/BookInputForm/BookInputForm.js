import React from "react";
import template from "./BookInputForm.jsx";

class BookInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", bookName: "", author: "", price: "" };
    this.handleId = this.handleId.bind(this);
    this.handleBookName = this.handleBookName.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleId(event) {
    this.setState({ id: event.target.value });
  }

  handleBookName(event) {
    this.setState({ bookName: event.target.value });
  }

  handleAuthor(event) {
    this.setState({ author: event.target.value });
  }

  handlePrice(event) {
    this.setState({ price: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    console.log(JSON.stringify(this.state));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };

    fetch("http://localhost:7001/library/books/", requestOptions).then(
      (response) => console.log(response)
    );
  }

  render() {
    return (
      <div className="book-input-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter the ID:</label>
            <input
              type={"text"}
              name="id"
              value={this.state.id}
              onChange={this.handleId}
            />
          </div>

          <div>
            <label>Enter the Book Name:</label>
            <input
              type={"text"}
              name="bookName"
              value={this.state.bookName}
              onChange={this.handleBookName}
            />
          </div>

          <div>
            <label>Enter the Author:</label>
            <input
              type={"text"}
              name="author"
              value={this.state.author}
              onChange={this.handleAuthor}
            />
          </div>

          <div>
            <label>Enter the Price:</label>
            <input
              type={"text"}
              name="price"
              value={this.state.price}
              onChange={this.handlePrice}
            />
          </div>

          <input type={"submit"} value={"Add new Book"} />
        </form>
      </div>
    );
  }
}

export default BookInputForm;
