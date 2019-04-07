import React from "react";
import Book from "./Book";

const Bookshelf = props => {
  return (
    <>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.title}
                    authors={book.authors}
                    images={book.imageLinks.smallThumbnail}
                    currentShelf={book.shelf}
                    updateShelf={props.updateShelf}
                    book={book}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
