import React from 'react';
import { debounce } from 'throttle-debounce';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

const bookshelves = [{
  id: 'currentlyReading',
  title: 'Currently Reading'
},
{
  id: 'wantToRead',
  title: 'Want to Read'
},
{
  id: 'read',
  title: 'Read'
}]

class BooksApp extends React.Component {

  state = {
    userBooks: [],
    results: [],
    error: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({userBooks: books})
  })}

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(error => {
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

  render() {
    const { userBooks, results } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            userBooks={userBooks}
            bookshelves={bookshelves}
            onMoveBook={this.moveBook}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            results={results}
            userBooks={userBooks}
            onMoveBook={this.moveBook}
            onSearchBooks={this.searchBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
