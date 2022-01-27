import "./BooksRouting.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "../Books";
import StateHookDemo from "../StateHookDemo";
import BooksHooks from "../BooksHooks";


function template() {
  var imageName = require("../../img/product-2.jpg");
  return (
    <div className="books-routing">
      <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/books">Books</Link>
                </li>
                <li>
                  <Link to="/state">StateHookDemo</Link>
                </li>
                <li>
                  <Link to="/booksFromHooks">Books Hook Demo</Link>
                </li>
              </ul>
            </nav>
            <img src={imageName} />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/state" element={<StateHookDemo />}></Route>
              <Route path="/books" element={<Books />}></Route>
              <Route path="/booksFromHooks" element={<BooksHooks />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
};

export default template;
