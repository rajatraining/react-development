import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Books from "./components/Books";
import BooksHooks from "./components/BooksHooks";
import StateHookDemo from "./components/StateHookDemo";


export default (
    <Route>
     
              <Route path="/state" component={StateHookDemo}></Route>
              <Route path="/books" component={Books}></Route>
              <Route path="/booksFromHooks" component={BooksHooks}></Route>
             
       
    </Route>
  );
  
  