import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = props => {
  const { book, updateShelf, currentShelf, title, authors } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks === undefined ? (
            <div>No image</div>
          ) : (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
              }}
            />
          )}
          <ShelfChanger
            currentShelf={currentShelf}
            updateShelf={updateShelf}
            book={book}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
        {/*<Link to={{pathname: '/details', state: book}}><button className="btn">View Details</button></Link>*/}
      </div>
    </li>
  );
};

export default Book;
