import React    from "react";
import template from "./Books.jsx";

class Books extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
   }
  // The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM 
  //(Document Object Model). 
  //This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

  // All the AJAX requests and the DOM or state updation should be coded in the componentDidMount() method block. 
  //We can also set up all the major subscriptions here but to avoid any performance issues, 
  //always remember to unsubscribe them in the componentWillUnmount() method.
  componentDidMount() {
    fetch("http://localhost:7001/library/books")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            error: false,
            isLoaded: true,
            items: result
          });
         console.log(this.state);
        }
      )
        
  }


  render() {
   // const { error, isLoaded, items } = this.state;
      return  template.call(this);
      
      //(
      //  <div>
      //    <h1>Books {console.log(this.state.items)}</h1>
      //   <ul>
      //     {this.state.items.map(item => (
      //       <li key={item.id}>
      //         {item.bookName} {item.price}
      //       </li>
      //     ))}
      //   </ul>
      //   </div>
       

      //);
    
  }
  
}

export default Books;
