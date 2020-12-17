import React from 'react';
import { debounce } from 'throttle-debounce';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  // Declare state variables
  state = {
    userBooks: [],
    results: [],
    error: false
  }
  // Invoke componentDidMount in order to insert components into the DOM tree
  async componentDidMount() {
    const userBooks = await BooksAPI.getAll();
    this.setState({userBooks})}
  // Function to allow books to be moved between shelves
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .catch(error => {
      console.log(error);
      this.setState({ error: true });
    });
    if (shelf === 'none') {
      this.setState(prevState => ({
        userBooks: prevState.userBooks.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        userBooks: prevState.userBooks.filter(b => b.id !== book.id).concat(book)
      }));
    }
  }
  // Function to search books in database by using debounce to optimize app performance
  searchBooks = debounce(300, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if(books.error) {
          this.setState({results: [] })
        } else {
          this.setState({results: books})
        }
      })
    } else {
      this.setState({results: [] })
    }
  })
 // Function to reset input field by clicking back button
  resetQuery = () => {
    this.setState({results: []})
  }

  render() {
    const { userBooks, results } = this.state
    return (
      <div className="app">
        <Route exact path='/'>
          <ListBooks
              userBooks={userBooks}
              onMoveBook={this.moveBook}
            />
        </Route>
          
        <Route path='/search'>
          <SearchBooks
              results={results}
              userBooks={userBooks}
              onMoveBook={this.moveBook}
              onSearchBooks={this.searchBooks}
              onResetQuery={this.resetQuery}
            />
        </Route>
      </div>
    )
  }
}

export default BooksApp
