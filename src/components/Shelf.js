import React from "react";
import Book from "./Book";

const Shelf = props => {
  return props.books.length === 0 || props.books.length === undefined ? (
    <div className="no-lisiting">Nothing Found</div>
  ) : (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book
              key={book.id}
              title={book.title}
              authors={book.authors}
              currentShelf={book.shelf}
              updateShelf={props.updateShelf}
              book={book}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
