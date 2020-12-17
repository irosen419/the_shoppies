import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

function Result({ searchInput, addOrRemove }) {

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
        return results.map(movie => <MovieCard key={results.indexOf(movie)} movie={movie} addOrRemove={addOrRemove} list="results" />)
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
            <h2>Results for "{searchInput}"</h2>
            <div id='results-list'>
                {mapResults()}
            </div>
            {renderButtons()}
        </div>
    )
}

export default Result