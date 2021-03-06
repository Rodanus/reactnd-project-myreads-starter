import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./Components/BookShelf";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookShelves: {
      "Currently Reading": [],
      "Want To Read": [],
      Read: [],
    },
  };

  /*
   * When the user decides to move the book to another shelf, this funtion will
   * update the the book's shelf and will re-render all the shelves again.
   */
  handleMovingBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      BooksAPI.getAll().then(books => {
        this.organizeBooks(books);
      });
    });
  };

  // Makes sure that the books are being stored and component re-renders
  addBooksToShelves = books => {
    const { currentlyReading, wantToRead, read } = books;
    this.setState({
      bookShelves: {
        "Currently Reading": currentlyReading,
        "Want To Read": wantToRead,
        Read: read,
      },
    });
  };

  // takes an array of books and orgnizes them based on the books shelf
  organizeBooks = books => {
    const bookShelves = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };
    books.forEach(book => bookShelves[book.shelf].push(book));

    this.addBooksToShelves(bookShelves);
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.organizeBooks(books));
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.entries(this.state.bookShelves).map(bookShelf => (
                  <BookShelf
                    key={bookShelf[0]}
                    bookShelfName={bookShelf[0]}
                    books={bookShelf[1]}
                    handleMovingBook={this.handleMovingBook}
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
