import logo from "./logo.svg";
import "./App.css";
import Books from "./components/Books";
import BooksHooks from "./components/BooksHooks";
import StateHookDemo from "./components/StateHookDemo";
import RoutePractice from "./components/RoutePractice";
import DataTableSample from "./components/DataTableSample";
import BooksRouting from "./components/BooksRouting";
import routes from "./routes";
import { Router, browserHistory } from "react-router";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/BooksRouting/SignIn";
import BookInputForm from "./components/BookInputForm/BookInputForm";
import BookInputByHooks from "./components/BookInputByHooks";

function App() {
  var imageName = require("./img/product-2.jpg");

  return (
    <div className="App">
      <header className="header">
        <BookInputByHooks></BookInputByHooks>
        {/* <BookInputForm ></BookInputForm> */}
        {/* <Router routes={routes}></Router> */}
        {/* <BooksRouting></BooksRouting> */}
        {/* <SignIn></SignIn> */}

        {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<RoutePractice />}>
          <Route index element={<Books/>}/>
          <Route path="/hookssample" element={<BooksHooks/>}/>
          <Route path="/statesample" element={<StateHookDemo/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter> */}
        {/* <Books name="Wings of Fire"></Books> */}
        {/* <BooksHooks></BooksHooks> */}
        {/* <StateHookDemo></StateHookDemo> */}
        {/* <DataTableSample></DataTableSample> */}
      </header>
    </div>
  );
}

export default App;
