import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

function Result({ searchInput, addOrRemove, cookies }) {

    const [results, setResults] = useState([])

    const [page, setPage] = useState(1)

    useEffect(() => {
        if (searchInput.length) {
            fetch(`http://www.omdbapi.com/?s=${searchInput}&type=movie&page=1&apikey=40281cad`)
                .then(resp => resp.json())
                .then(data => {
                    setResults([...data.Search])
                })
                .catch(err => console.log(err))
        }
    }, [searchInput])

    useEffect(() => {
        if (searchInput.length) {
            fetch(`http://www.omdbapi.com/?s=${searchInput}&type=movie&page=${page}&apikey=40281cad`)
                .then(resp => resp.json())
                .then(data => {
                    setResults([...data.Search])
                })
                .catch(err => console.log(err))
        }
    }, [page])

    const mapResults = () => {
        let cookieNoms = cookies.get('nominations')
        return results.map(movie => <MovieCard key={movie.imdbID} movie={movie} addOrRemove={addOrRemove} list="results" cookieNoms={cookieNoms} />)
    }

    const renderButtons = () => {
        return (
            <div id='buttons'>
                {page > 1 ? <button onClick={() => setPage(page - 1)}>Previous Page</button> : null}
                {page > 0 && results.length === 10 ? <button onClick={() => setPage(page + 1)}>Next Page</button> : null}
            </div>
        )
    }

    return (
        <div id='results'>
            <h2>{searchInput ? `Results for "${searchInput}"` : 'Type a movie title in the above to search for it!'}</h2>
            <div id='results-list'>
                {mapResults()}
            </div>
            {renderButtons()}
        </div>
    )
}

export default Result