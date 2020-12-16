function MovieCard({ movie, addNomination, list }) {
    return (
        <div key={movie.Title}>
            <h3>{movie.Title}({movie.Year})</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <br></br>
            {list === 'results' ? <button onClick={() => addNomination(movie)}>Nominate</button> : null}
        </div>
    )
}

export default MovieCard