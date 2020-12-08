import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangeShelf extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        shelf: this.props.book.shelf
    }

    handleChange = (book , event) => {
        event.preventDefault()
        this.props.onMoveBook(book, event.target.value)
        this.setState({shelf: event.target.value})
    }

    render() {
        const { book } = this.props
        const { shelf } = this.state
        return (
            <div className="book-shelf-changer">
                <select value={shelf} onChange={(event) => this.handleChange(event, book)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
} 

export default ChangeShelf