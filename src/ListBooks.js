import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

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

const ListBooks = ({userBooks, onMoveBook}) => (
    <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookshelves.map((shelf, index) => {
                    return <BookShelf 
                        key={index} // Todo: Refactor to use without index
                        id={shelf.id}
                        title={shelf.title}
                        userBooks={userBooks}
                        onMoveBook={onMoveBook}
                    />
                })}
            </div>
            <div className="open-search">
                <Link 
                    className="add-button"
                    to='/search'>
                        <button>Add a Book</button>
                </Link>
            </div>
        </div>
    )

export default ListBooks