import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Main from "./components/Main";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";
import "./App.css";

class BooksApp extends Component {
  state = {
    query: "",
    queryResults: [],
    books: [],
    currentPath: ""
  };

  updateQuery = query => {
    this.setState({ query });
    this.updateQueryResults(query);
  };
  updateQueryResults = query => {
    query
      ? BooksAPI.search(query).then(queryResults => {
          queryResults.error
            ? this.setState({
                queryResults: []
              })
            : this.setState({
                queryResults
              });
        })
      : this.setState({
          queryResults: []
        });
  };
  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    this.state.query.length !== 0
      ? this.setState(state => ({
          queryResults: state.queryResults
            .filter(b => b.id !== book.id)
            .concat([book])
        }))
      : this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
    BooksAPI.update(book, shelf);
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Main
                  {...props}
                  books={this.state.books}
                  updateShelf={this.updateShelf}
                />
              )}
            />

            <Route
              path="/search"
              render={props => (
                <Search
                  {...props}
                  query={this.state.query}
                  queryResults={this.state.queryResults}
                  updateQuery={this.updateQuery}
                  updateQueryResults={this.updateQueryResults}
                  updateShelf={this.updateShelf}
                />
              )}
            />
            <Route path="/details" component={BookDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
