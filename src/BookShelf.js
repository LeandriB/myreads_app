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
/*
    getBooks() {
        const { shelf } = this.props
        const booksOnShelf = this.props.userBooks.filter((book) => book.shelf === shelf.id)
        return booksOnShelf
    }
*/
    render() {
        const { title, onMoveBook, userBooks } = this.props
        const booksOnShelf = userBooks.filter(book => book.shelf === this.props.id)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">  
                        {booksOnShelf.map(book => (
                            <Book
                                book={book}
                                key={book.id}
                                shelf={this.props.id}
                                onMoveBook={onMoveBook}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf