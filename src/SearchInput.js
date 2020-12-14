import React, { Component } from 'react'

class SearchInput extends Component {

    state = {
        value: ''
    }

    handleChange = event => {
        const search = event.target.value;
        this.setState({ value: search }, () => {
        this.props.onSearchBooks(search);
        });
    };

    render() {
        return (
            <div className="search-books-input-wrapper">    
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={ this.state.value }
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default SearchInput