import React    from "react";
import template from "./StateExample.jsx";
import { MDBDataTableV5 } from 'mdbreact';

class StateExample extends React.Component {

  constructor()
  {
    super();
    this.state = {message:'', bookslist:[]}; // String variable initializing a new variable kind of 

    this.loadMessage= this.loadMessage.bind(this);
    this.getBooksList = this.getBooksList.bind(this);
  }

   loadMessage(event)
  {
    this.setState({message: event.target.value}); // setter
  }

componentDidMount()
{
  fetch("http://localhost:7001/library/books")
    .then ((res)=> (res).json())
    .then((result)=> {
      console.log(result);
      this.setState({message : "Books Received", bookslist : result})
    });


    this.setState({})



}


  getBooksList()
  {
    fetch("http://localhost:7001/library/books")
    .then ((res)=> (res).json())
    .then((result)=> {
      console.log(result);
      this.setState({message : "Books Received", bookslist : result})
    });


  }


  render() {
    return template.call(this);
  }
}

export default StateExample;
