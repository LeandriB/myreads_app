import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangeShelf extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        shelf: PropTypes.string.isRequired
    }

    state = {
        value: this.props.book.shelf // adding book gives me the proper value of shelf in state
    }

    handleChange = event => {
        event.preventDefault()
        const { value } = event.target
        this.setState({ value })
        this.props.onMoveBook(this.props.book, value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleChange}>
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