import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooks extends Component {

    static propTypes = {
        userBooks: PropTypes.array.isRequired,
        results: PropTypes.array.isRequired,
        userInput: PropTypes.string.isRequired,
        onMoveBook: PropTypes.func.isRequired

    }

    render() {
        const { books, query } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={ query }/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book
                                book={book}
                                key={book.id}
                            />
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks