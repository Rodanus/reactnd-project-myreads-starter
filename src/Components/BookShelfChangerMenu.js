import React, { Component } from "react";

class BookShelfMenuChanger extends Component {
  state = {};

  /*
   * Handles moving the book by calling the function passed
   * from the parten App component
   */
  movingBookToAnotherShelf = event => {
    this.props.handleMovingBook(this.props.book, event.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.whichShelfThisBookBelongsTo}
          onChange={this.movingBookToAnotherShelf}
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
    );
  }
}

export default BookShelfMenuChanger;
