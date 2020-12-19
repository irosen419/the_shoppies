import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

function Result({ searchInput, addOrRemove }) {

    const [results, setResults] = useState([])
    const [totalResults, setTotalResults] = useState("")
    const [page, setPage] = useState(1)

    // Whenever the search input changes, we do a new fetch request for movie titles that match the input
    // Movie and total results are both stored in state
    useEffect(() => {
        if (searchInput.length) {
            async function firstFetch() {
                try {
                    const response = await fetch(`http://www.omdbapi.com/?s=${searchInput}&type=movie&page=1&apikey=40281cad`)
                    const json = await response.json()
                    setTotalResults(json.totalResults)
                    setResults([...json.Search])

                } catch (err) {
                    console.log(err)
                }

            }
            firstFetch()
        }
    }, [searchInput])

    // Fetch for a new page of results as the value of 'page' changes
    useEffect(() => {
        if (searchInput.length) {
            async function pageChangeFetch() {
                try {
                    const response = await fetch(`http://www.omdbapi.com/?s=${searchInput}&type=movie&page=${page}&apikey=40281cad`)
                    const json = await response.json()
                    setTotalResults(json.totalResults)
                    setResults([...json.Search])
                } catch (err) {
                    console.log(err)
                }
            }
            pageChangeFetch()
        }
    }, [page])

    // Maps results of fetch. Each movie to it's own movie card.
    const mapResults = () => {
        return results.map(movie => <MovieCard key={movie.imdbID} movie={movie} addOrRemove={addOrRemove} list="results" />)
    }

    // Decides, based on 'page' number, whether or not to render Next and Previous buttons
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
            {/* If there is no searh input, promt user to search for a movie */}
            {/* Print number of results */}
            <h2>{searchInput ? `${totalResults || 0} results for "${searchInput}"` : 'Type a movie title in the above to search for it!'}</h2>
            <div id='results-list'>
                {mapResults()}
            </div>
            {renderButtons()}
        </div>
    )
}

export default Result