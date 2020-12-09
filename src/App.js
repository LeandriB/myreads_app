import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {

  state = {
    userBooks: [],
    results: [],
    userInput: ''
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((userBooks) => {
      this.setState(() => ({
        userBooks
      }))
    })
  }

  render() {
    const { userBooks } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            userBooks={userBooks}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
