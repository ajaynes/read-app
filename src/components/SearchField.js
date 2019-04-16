import React from "react";
import CloseSearch from "./CloseSearch";

const SearchField = props => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <CloseSearch />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={props.query}
            onChange={event => props.updateQuery(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchField;
