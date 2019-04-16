import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import SearchField from "../components/SearchField";
import Shelf from "../components/Shelf";

class Search extends Component {
  state = {
    query: "",
    queryResults: []
  };

  updateQuery = query => {
    this.setState({ query });
    if (query.length === 0) {
      this.setState({ queryResults: [] });
    } else {
      BooksAPI.search(query).then(queryResults => {
        if (queryResults.length > 0) {
          queryResults.map((result, index) => {
            let bookShelf = this.props.books.filter(shelf => {
              return shelf.id === result.id;
            });
            if (bookShelf.length > 0) {
              queryResults[index].shelf = bookShelf[0].shelf;
            } else {
              queryResults[index].shelf = "none";
            }
            return bookShelf;
          });
          this.setState({ queryResults });
        }
      });
    }
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

  render() {
    return (
      <>
        <SearchField
          updateQuery={this.updateQuery}
          updateQueryResults={this.updateQueryResults}
          query={this.state.query}
        />
        <Shelf
          books={this.state.queryResults}
          updateShelf={this.props.updateShelf}
          updateQuery={this.updateQuery}
        />
      </>
    );
  }
}

export default Search;
