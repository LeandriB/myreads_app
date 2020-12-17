import React, { useState, useEffect } from 'react'

function SearchInput({ onSearchBooks }) {
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        onSearchBooks(query)
    }, [setQuery, onSearchBooks, query]) // Am I using this correctly? Not getting dependency error
    
    return (
        <div className="search-books-input-wrapper">    
            <input 
                type="text" 
                placeholder="Search by title or author"
                value={ query }
                onChange={({target}) => setQuery(target.value)}
            />
        </div>
    );
}

export default SearchInput;