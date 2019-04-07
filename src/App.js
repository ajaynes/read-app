import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";
import "./App.css";

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/search" component={Search} />
            <Route path="/details" component={BookDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
