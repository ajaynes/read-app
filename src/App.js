import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Main from "./components/Main";
import Search from "./components/Search";
import "./App.css";

class BooksApp extends Component {
  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/search" component={Search} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
