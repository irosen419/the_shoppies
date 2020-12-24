import React, { useEffect } from 'react'
import MovieCard from "./MovieCard"

function Nominations({ addOrRemove, nominations }) {

    // If the user has nominated 5 movies, alert them...
    useEffect(() => {
        if (nominations.length === 5) {
            alert("Congratulations! You have nominated 5 movies! You must really like movies!")
        }
    }, [nominations])

    // Maps 'nominations'. Each movie to it's own movie card.
    const mapNominations = () => {
        return [...nominations].map(movie => <MovieCard key={movie.imdbID} movie={movie} addOrRemove={addOrRemove} list="nominations" nominations={nominations} />)
    }

    return (
        <div id='nominations'>
            <h2>Nominations</h2>
            {/* If there are no nominations, propmt the user to make one */}
            {
                [...nominations].length ?
                    <div id='nominations-list'>
                        {mapNominations()}
                    </div> :
                    <h2>You haven't made any nominations yet...</h2>
            }


        </div>
    )
}

export default Nominations