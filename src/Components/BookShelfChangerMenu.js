import React, { Component } from "react";

class BookShelfMenuChanger extends Component {
  state = {};
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.whichShelfThisBookBelongsTo}>
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
