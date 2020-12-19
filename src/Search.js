import './CSS/search.scss'
import React, { useState, useEffect } from 'react'


function Search({ getTitle }) {

    const [movieTitle, setMovieTitle] = useState("")

    const handleInput = (e) => {
        setMovieTitle(e.target.value)
    }

    // As search input ('movieInput') changes, send input up to App level
    useEffect(() => {
        getTitle(movieTitle)
    }, [movieTitle])

    return (
        <div id='search'>
            <div id='inner-search'>
                <h2>Movie title</h2>
                <input id='search-input' type="text" value={movieTitle} onChange={handleInput} />
            </div>
        </div>
    )
}

export default Search