import './CSS/search.scss'
import React, { useState, useEffect } from 'react'


function Search({ getTitle }) {

    const [movieTitle, setMovieTitle] = useState("")

    const handleInput = (e) => {
        setMovieTitle(e.target.value)
    }

    useEffect(() => {
        getTitle(movieTitle)
    }, [movieTitle])

    return (
        <div id='search'>
            <div id='inner-search'>
                <h3>Movie title</h3>
                <input id='search-input' type="text" value={movieTitle} onChange={handleInput} />
            </div>
        </div>
    )
}

export default Search