import React    from "react";


class FormSubmission extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault(); //The preventDefault() method is used to prevent the browser from executing the default action of the selected element.
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div><input type="submit" value="Submit" /></div>
          <div><h2>Welcome, {this.state.value}</h2></div>
          
        </form>
      );
    }
  }

  export default FormSubmission;