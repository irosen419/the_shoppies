function MovieCard({ movie, addOrRemove, list }) {

    let buttons = document.querySelectorAll('.results')
    var button = [...buttons].find(btn => btn.id === movie.imdbID)

    const disableOrEnable = () => {
        if (list === 'results') {
            button.disabled = true
        } else if (list === 'nominations') {
            button.disabled = false
        }
    }

    return (
        <div className='movie-card'>
            <h4>{movie.Title} ({movie.Year})</h4>
            <img src={movie.Poster} alt={movie.Title} />
            <br></br>
            <div className='bottom'>
                <p>View this movie on IMDB <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" >here</a>!</p>
                <button id={movie.imdbID} className={list} onClick={() => {
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

