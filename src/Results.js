import React, { useState, useEffect } from 'react'

function Result({ searchInput }) {

    // const [results, setResults] = useState([])

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=40281cad`)
            .then(resp => resp.json())
            .then(console.log)
    }, [searchInput])

    return (
        <div>
            <h2>Results for "{searchInput}"</h2>
            <ul>
                {/* {mapSearchInput(searchInput)} */}
            </ul>
        </div>
    )
}

export default Result