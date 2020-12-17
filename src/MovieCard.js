function MovieCard({ movie, addOrRemove, list }) {
    console.log(movie)
    return (
        <div className='movie-card'>
            <h4>{movie.Title} ({movie.Year})</h4>
            <img src={movie.Poster} alt={movie.Title} />
            <br></br>
            <div className='bottom'>
                <p>View this movie on IMDB <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" >here</a>!</p>
                <button onClick={() => addOrRemove(movie, list)}>{list === 'results' ? 'Nominate' : 'Remove Nomination'}</button>
            </div>
        </div>
    )
}

export default MovieCard

