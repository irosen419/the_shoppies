import React, { useState } from 'react'


function Search({ getTitle }) {

    const [movieTitle, setMovieTitle] = useState("")

    const handleInput = (e) => {
        setMovieTitle(e.target.value)
    }

    const submitInput = (e) => {
        e.preventDefault()

        getTitle(movieTitle)

        setMovieTitle("")
    }

    return (
        <div>
            <h3>Movie title</h3>
            <form onSubmit={submitInput}>
                <input type="text" value={movieTitle} onChange={handleInput} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Search