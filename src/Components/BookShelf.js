import React, { Component } from "react";
import BooksList from "./BooksList";

class BookShelf extends Component {
  state = {};
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BooksList />
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
