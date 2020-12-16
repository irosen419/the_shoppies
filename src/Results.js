import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

function Result({ searchInput, addNomination }) {

    const [results, setResults] = useState([])

    useEffect(() => {
        if (searchInput.length) {
            fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=40281cad`)
                .then(resp => resp.json())
                .then(data => {
                    setResults([...data.Search])
                })
        }
    }, [searchInput])

    const mapResults = () => {
        return results.map(movie => <MovieCard movie={movie} addNomination={addNomination} list="results" />)
    }

    return (
        <div style={{ border: '2px solid black', width: 'fit-content', padding: '50px' }}>
            <h2>Results for "{searchInput}"</h2>
            <ul>
                {mapResults()}
            </ul>
        </div>
    )
}

export default Result