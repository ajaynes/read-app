import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Bookshelf from "./BookShelf";
import Search from "./Search";
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
    BooksAPI.update(book, shelf);
  };
  render() {
    console.log(this.state.books);
    return (
      <>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <Bookshelf
          books={this.state.books.filter(
            book => book.shelf === "currentlyReading"
          )}
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

        {/*<Search />*/}
        <AddBtn />
      </>
    );
  }
}

export default Main;
