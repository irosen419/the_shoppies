function MovieCard({ movie, addOrRemove, list }) {
    return (
        <div className='movie-card'>
            <h3>{movie.Title} ({movie.Year})</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <br></br>
            <h3>View this movie on IMDB <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" >here</a>!</h3>
            <button onClick={() => addOrRemove(movie, list)}>{list === 'results' ? 'Nominate' : 'Remove Nomination'}</button>
        </div>
    )
}

export default MovieCard