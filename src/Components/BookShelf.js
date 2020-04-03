import React, { Component } from "react";
import BooksList from "./BooksList";

class BookShelf extends Component {
  state = {};
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookShelfName}</h2>
        <div className="bookshelf-books">
          <BooksList books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default BookShelf;