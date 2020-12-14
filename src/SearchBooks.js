import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import Book from './Book'

class SearchBooks extends Component {
    render() {
        const { results, userBooks, onMoveBook, onSearchBooks, onResetQuery} = this.props
        const updatedBooks = results.map((book) => {
            userBooks.map((b) => {
                if(b.id === book.id) {
                    book.shelf = b.shelf;
                }
                return b;
            });
            return book;
        })

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search" onClick={onResetQuery}>Close</button>
                    </Link>
                    <SearchInput
                        onSearchBooks={onSearchBooks}
                    />
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {updatedBooks.map((book) => (
                            <Book
                                book={book}
                                key={book.id}
                                shelf={book.shelf ? book.shelf : 'none'}
                                onMoveBook={onMoveBook}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks