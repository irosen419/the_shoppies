import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

function Result({ searchInput, addOrRemove }) {

    const [results, setResults] = useState([])

    const [page, setPage] = useState(1)

    useEffect(() => {
        if (searchInput.length) {
            fetch(`http://www.omdbapi.com/?s=${searchInput}&page=1&apikey=40281cad`)
                .then(resp => resp.json())
                .then(data => {
                    setResults([...data.Search])
                })
        }
    }, [searchInput])

    useEffect(() => {
        if (searchInput.length) {
            fetch(`http://www.omdbapi.com/?s=${searchInput}&page=${page}&apikey=40281cad`)
                .then(resp => resp.json())
                .then(data => {
                    setResults([...data.Search])
                })
        }
    }, [page])

    const mapResults = () => {
        return results.map(movie => <MovieCard key={results.indexOf(movie)} movie={movie} addOrRemove={addOrRemove} list="results" />)
    }

    const renderButtons = () => {
        return (
            <>
                {page > 1 ? <button onClick={() => setPage(page - 1)}>Previous Page</button> : null}
                {page > 0 && results.length === 10 ? <button onClick={() => setPage(page + 1)}>Next Page</button> : null}
            </>
        )
    }

    return (
        <div style={{ border: '2px solid black', width: 'fit-content', padding: '50px' }}>
            <h2>Results for "{searchInput}"</h2>
            <ul>
                {mapResults()}
            </ul>
            {renderButtons()}
        </div>
    )
}

export default Result