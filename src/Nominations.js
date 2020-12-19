import React, { useEffect } from 'react'
import MovieCard from "./MovieCard"

function Nominations({ addOrRemove, nominations }) {

    useEffect(() => {
        if (nominations.length === 5) {
            alert("Congratulations! You have nominated 5 movies! You must really like movies!")
        }
    }, [nominations])

    const mapNominations = () => {
        return [...nominations].map(movie => <MovieCard key={movie.imdbID} movie={movie} addOrRemove={addOrRemove} list="nominations" />)
    }

    return (
        <div id='nominations'>
            <h2>Nominations</h2>
            {
                nominations.length ?
                    <div id='nominations-list'>
                        {mapNominations()}
                    </div> :
                    <h2>You haven't made any nominations yet...</h2>
            }


        </div>
    )
}

export default Nominations