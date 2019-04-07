import React from "react";
import { Link } from "react-router-dom";

const Book = props => {
  const { images, book, updateShelf, currentShelf, title, authors } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${images})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={event => updateShelf(book, event.target.value)}
              value={currentShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
        <Link to={{pathname: '/details', state: book}}><button className="btn">View Details</button></Link>
        {/* got direction from: https://tylermcginnis.com/react-router-pass-props-to-link/ */}
      </div>
    </li>
  );
};

export default Book;
