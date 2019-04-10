import React, { Component } from "react";
import { Link } from "react-router-dom";

const Search = props => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={props.query}
            onChange={event => props.updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {props.queryResults === undefined || props.queryResults.length === 0 ? (
          <div>No results</div>
        ) : (
          <ol className="books-grid">
            {props.queryResults.map(result => (
              <li key={result.id}>
                <div className="book">
                  <div className="book-top">
                    {result.imageLinks === undefined ? (
                      <div>No image found</div>
                    ) : (
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${
                            result.imageLinks.smallThumbnail
                          })`
                        }}
                      />
                    )}
                    <div className="book-shelf-changer">
                      <select
                        onChange={event =>
                          props.updateShelf(result, event.target.value)
                        }
                        value={"none"}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{result.title}</div>
                  <div className="book-authors">{result.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Search;
