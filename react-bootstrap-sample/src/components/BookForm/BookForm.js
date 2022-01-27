import React    from "react";
import template from "./BookForm.jsx";

class BookForm extends React.Component {
 /**
  * 
  * Constructor with Super(props)
  * binding handleChange and handleSubmit methods 
  * which can automatically handles the forms
  */
 
  constructor(props) {
    super(props);
    this.state = {bookId: '', bookName:'', author:'', price:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookId = this.handleBookId.bind(this);
    this.handleBookName = this.handleBookName.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  /**
   * handleChange(event) is a default method can 
   * handle the changes in any form components
   */
  handleBookId(event){
    this.setState({bookId: event.target.value});
  }
handleBookName(event){
  this.setState({bookName: event.target.value});
  }
  handleAuthor(event){
    this.setState({author: event.target.value});
  }
  handlePrice(event){
    this.setState({price: event.target.value});
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(new FormData(event.currentTarget.value));
    alert('A name was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
  };

  fetch('https://545.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));

  }

  render() {
    return template.call(this);
  }
}

export default BookForm;
