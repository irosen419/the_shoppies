import MovieCard from "./MovieCard"

function Nominations({ nominations }) {



    const mapNominations = () => {
        return nominations.map(movie => <MovieCard movie={movie} list="nominations" />)
    }

    return (
        <div style={{ border: '2px solid black', width: 'fit-content', padding: '50px' }}>
            <h2>Nominations</h2>
            {mapNominations()}
        </div>
    )
}

export default Nominations