import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import Search from "./containers/Search";
import BookDetails from "./containers/BookDetails";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

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
        <div className="list-books">
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Main
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                )}
              />
              <Route
                path="/search"
                render={props => (
                  <Search
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                )}
              />
              <Route path="/details" component={BookDetails} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default BooksApp;
