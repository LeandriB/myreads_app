import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

    state ={
        query: '',
        results: []
    }

    render() {
        const { results, query } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
                        {results.map((book) => (
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