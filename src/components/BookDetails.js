import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BookDetails extends Component {

  render(){
    const {title, authors, description, imageLinks} = this.props.location.state;
    return (
      <div className="row">
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <div style={{textAlign: 'center'}}><img className="book-cover" src={imageLinks.thumbnail} alt="book cover" /></div>
        <h2 style={{textAlign: 'center'}}>By: {authors}</h2>
        <div>{description}</div>
        <Link to='/'><button className="btn">Back</button></Link>
      </div>
    );
  }
}

export default BookDetails;
