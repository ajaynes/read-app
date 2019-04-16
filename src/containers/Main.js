import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import AddBtn from "../components/AddBtn";
import Shelf from "../components/Shelf";

class Main extends Component {
  render() {
    return (
      <>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            books={this.props.books.filter(book => book.shelf === "read")}
            title={"Read"}
            updateShelf={this.props.updateShelf}
          />
          <Shelf
            books={this.props.books.filter(
              book => book.shelf === "currentlyReading"
            )}
            title={"Currently Reading"}
            updateShelf={this.props.updateShelf}
          />
          <Shelf
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
            title={"Want to Read"}
            updateShelf={this.props.updateShelf}
          />
          <AddBtn books={this.props.books} />
        </div>
      </>
    );
  }
}

export default Main;
