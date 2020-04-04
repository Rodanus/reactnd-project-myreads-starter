import React, { Component } from "react";
import Book from "./Book";

class BooksList extends Component {
  state = {};
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => (
          <Book
            key={book.id}
            book={book}
            handleMovingBook={this.props.handleMovingBook}
          />
        ))}
      </ol>
    );
  }
}

export default BooksList;
