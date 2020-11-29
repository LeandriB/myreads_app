import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf title='Currently Reading'/>
                    <BookShelf title='Must Read'/>
                    <BookShelf title='Read'/>
                </div>
                <div className="open-search">
                    <Link 
                        className="add-button"
                        to='/search'>Add a Book
                        {/*<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>*/}
                    </Link>
                </div>
        </div>
        )
    }
}

export default ListBooks