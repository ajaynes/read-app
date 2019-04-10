import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Bookshelf from "./BookShelf";
import AddBtn from "./AddBtn";

const Main = props => {
  console.log(props.books);
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      </div>

      <Bookshelf
        books={props.books.filter(book => book.shelf === "currentlyReading")}
        title={"Currently Reading"}
        updateShelf={props.updateShelf}
      />

      <Bookshelf
        books={props.books.filter(book => book.shelf === "wantToRead")}
        title={"Want to Read"}
        updateShelf={props.updateShelf}
      />

      <Bookshelf
        books={props.books.filter(book => book.shelf === "read")}
        title={"Read"}
        updateShelf={props.updateShelf}
      />

      <AddBtn />
    </>
  );
};

export default Main;
