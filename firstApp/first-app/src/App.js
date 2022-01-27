import logo from './logo.svg';
import './App.css';
import Books from './component/Books'
import BooksFromService from './component/BooksFromService/BooksFromService';
import BooksDataTable from './component/BooksDataTable/BooksDataTable';
import StateExample from './component/StateExample/StateExample';
import FormSubmission from './component/FormSubmission';
import FormSampleFunction from './component/FormSampleFunction';
import CallBookServiceByHooks from './component/CallBookServiceByHooks';


function App() {
 // var imageName = require("./images/product-2.jpg"); // import dynamic 

  return (
    <div className="App">
      <header className="App-header">
      {/* <Books name="Agni Chiragugal" image="https://picsum.photos/200"></Books>
      <Books name="My Books" image={imageName.default}></Books>
        */}
      {/* <BooksFromService></BooksFromService> */}
      {/* <BooksDataTable></BooksDataTable> */}
      {/* <StateExample></StateExample> */}

      {/* <FormSubmission></FormSubmission> */}

     {/* <FormSampleFunction></FormSampleFunction> */}
     <CallBookServiceByHooks></CallBookServiceByHooks>
      </header>
    </div>
  );
}

export default App;
