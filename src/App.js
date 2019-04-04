import React from "react";
// import * as BooksAPI from './BooksAPI'
import Main from "./components/Main";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}

export default BooksApp;
