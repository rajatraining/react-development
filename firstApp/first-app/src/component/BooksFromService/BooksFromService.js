import React    from "react";
import template from "./BooksFromService.jsx";

class BooksFromService extends React.Component {

constructor(props)
{
  super(props);
  this.state = {items:[]};
  this.header = [
    { title: "Name", prop: "name", sortable: true, filterable: true },
    {
      title: "User Name",
      prop: "username",
      sortable: true,
      filterable: true
    },
    { title: "Phone", prop: "phone", sortable: true, filterable: true },
    { title: "Website", prop: "website", sortable: true, filterable: true }
  ];
}



render() {
    return template.call(this);
  }



  componentDidMount(){ // After rendering the page
    fetch("http://localhost:7001/library/books")
    .then((res) => res.json() )
    .then((result)=> {this.setState({items : result}) });
  }

}

export default BooksFromService;
