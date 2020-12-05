import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        const { userBooks } = this.props
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
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {bookshelves.map((bookshelf, index) => {
                        return <BookShelf 
                            key={index}
                            id={bookshelf.id}
                            title={bookshelf.title}
                            userBooks={userBooks}
                            />
                    })}
                </div>
                <div className="open-search">
                    <Link 
                        className="add-button"
                        to='/search'>
                            <button>Add a Book</button>
                        {/*<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>*/}
                    </Link>
                </div>
        </div>
        )
    }
}

export default ListBooks