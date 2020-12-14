import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        shelf: PropTypes.string.isRequired
    }

    render() {
        const { book, onMoveBook} = this.props
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ 
                                                        width: 128, 
                                                        height: 193, 
                                                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'icons/cover_placeholder.jpg'})` 
                                                        }}></div>
                        <ChangeShelf
                            book={book} shelf={this.props.shelf} onMoveBook={onMoveBook}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown Author'}</div>
                </div>
            </li>
        )
    }
}

export default Book