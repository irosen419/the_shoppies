import React, { useState, useEffect } from 'react';

function MovieCard({ movie, addOrRemove, list, cookieNoms }) {

    const [nominations, setNominations] = useState([])

    const [buttonAbility, setButtonAbility] = useState(false)

    let button = document.getElementById(movie.imdbID)

    useEffect(() => {
        setNominations(cookieNoms)
    }, [cookieNoms])

    const disableButton = () => {
        let buttons = document.querySelectorAll('.results')
        let newButton = [...buttons].find(button => button.id === movie.imdbID)
        newButton.disabled = false
        console.log(newButton)
    }

    // const enableButton = () => {
    //     console.log('enabling')
    //     setButtonAbility(false)

    // }

    const disableOnLoad = (movie) => {
        let IDs = []

        if (nominations && nominations.length && button && button.className === 'results') {
            for (let i = 0; i < nominations.length; i++) {
                IDs.push(nominations[i].imdbID)
            }

            if (IDs.includes(movie.imdbID) && !buttonAbility) {
                setButtonAbility(true)
            } else if (!IDs.includes(movie.imdbID) && buttonAbility) {
                setButtonAbility(false)
            }
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
                    buttonAbility ? setButtonAbility(false) : disableButton()
                }}
                    disabled={buttonAbility}
                >
                    {list === 'results' ? 'Nominate' : 'Remove Nomination'}
                </button>
                {disableOnLoad(movie)}
            </div>
        </div>
    )
}

export default MovieCard

