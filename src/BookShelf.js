import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        userBooks: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    getBooks() {
        const booksOnShelf = this.props.userBooks.filter((book) => book.shelf === this.props.id)
        return booksOnShelf
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">  
                        {this.getBooks().map((book) => (
                            <Book
                                book={book}
                                key={book.id}
                                onMoveBook={(book, shelf) => {
                                    this.props.onMoveBook(book, shelf)
                                }}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf