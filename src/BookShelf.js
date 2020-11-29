import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    
    static PropTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf