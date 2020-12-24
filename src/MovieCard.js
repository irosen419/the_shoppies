import defaultImage from './images/default-movie-poster.jpg'

function MovieCard({ movie, addOrRemove, list, nominations }) {

    // Returns truthy or falsey if the nominations array contains the current movie
    const inNominations = () => {
        return !!nominations.find(movieObj => movieObj.imdbID === movie.imdbID)
    }

    return (
        // Display a movie's title, year, poster (if one exists) and it's IMDB link
        <div className='movie-card'>
            <h4>{movie.Title} ({movie.Year})</h4>
            {console.log(movie.Poster)}
            <img src={movie.Poster[0] === 'h' ? movie.Poster : defaultImage} alt={movie.Title} />
            <br></br>
            <div className='bottom'>
                <p>View this movie on IMDB <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer">here</a>!</p>
                <button
                    id={movie.imdbID}
                    className={list}
                    disabled={inNominations() && list === 'results'}
                    onClick={() => {
                        addOrRemove(movie, list)
                    }}
                >
                    {list === 'results' ? 'Nominate' : 'Remove Nomination'}
                </button>
            </div>
        </div >
    )
}

export default MovieCard

