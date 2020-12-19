function MovieCard({ movie, addOrRemove, list }) {

    // Once the nominate button is clicked, find the button on the DOM and disable it
    const disableOrEnable = () => {
        let buttons = document.querySelectorAll('.results')
        let button = [...buttons].find(btn => btn.id === movie.imdbID)
        if (list === 'results') {
            button.disabled = true
        } else if (list === 'nominations') {
            button.disabled = false
        }
    }

    return (
        // Display a movie's title, year, poster (if one exists) and it's IMDB link
        <div className='movie-card'>
            <h4>{movie.Title} ({movie.Year})</h4>
            <img src={movie.Poster} alt={movie.Title} />
            <br></br>
            <div className='bottom'>
                <p>View this movie on IMDB <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer">here</a>!</p>
                <button
                    id={movie.imdbID}
                    className={list}
                    onClick={() => {
                        addOrRemove(movie, list)
                        disableOrEnable()
                    }}
                >
                    {list === 'results' ? 'Nominate' : 'Remove Nomination'}
                </button>
            </div>
        </div>
    )
}

export default MovieCard

