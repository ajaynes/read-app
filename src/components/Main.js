import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Bookshelf from "./BookShelf";
import AddBtn from "./AddBtn";

class Main extends Component {
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
      <>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>

        <Bookshelf
          books={this.state.books.filter(book => book.shelf === "currentlyReading")}
          title={"Currently Reading"}
          updateShelf={this.updateShelf}
        />

        <Bookshelf
          books={this.state.books.filter(book => book.shelf === "wantToRead")}
          title={"Want to Read"}
          updateShelf={this.updateShelf}
        />

        <Bookshelf
          books={this.state.books.filter(book => book.shelf === "read")}
          title={"Read"}
          updateShelf={this.updateShelf}
        />


          <AddBtn />


      </>
    );
  }
}

export default Main;
