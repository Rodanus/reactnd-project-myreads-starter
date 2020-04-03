import React, { Component } from "react";
import BookShelfMenuChanger from "./BookShelfChangerMenu";

class Book extends Component {
  state = {};
  render() {
    const book = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img
                src={book.imageLinks.thumbnail}
                alt="book cover"
                className="book-cover-image"
              />
            </div>
            <BookShelfMenuChanger whichShelfThisBookBelongsTo={book.shelf} />
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors.map(author => (
            <div key={author} className="book-authors">
              {author}
            </div>
          ))}
        </div>
      </li>
    );
  }
}

export default Book;
