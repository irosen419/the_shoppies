import React, { useEffect } from 'react'
import MovieCard from "./MovieCard"

function Nominations({ addOrRemove, nominations }) {

    useEffect(() => {
        if (nominations.length === 5) {
            alert("Congratulations! You have nominated 5 movies! You must really like movies!")
        }
    }, [nominations])

    const mapNominations = () => {
        return nominations.map(movie => <MovieCard key={nominations.indexOf(movie)} movie={movie} addOrRemove={addOrRemove} list="nominations" />)
    }

    return (
        <div style={{ border: '2px solid black', width: 'fit-content', padding: '50px' }}>
            <h2>Nominations</h2>
            {mapNominations()}
        </div>
    )
}

export default Nominations