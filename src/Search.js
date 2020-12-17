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
        <div>
            <h3>Movie title</h3>
            <input type="text" value={movieTitle} onChange={handleInput} />
        </div>
    )
}

export default Search