import './App.scss'
import './CSS/container.scss';
import React, { useState } from 'react'
import Search from './Search'
import Results from './Results'
import Nominations from './Nominations'

function App() {

  const [searchInput, setSearchInput] = useState("")
  const [nominations, setNominations] = useState([])

  const getTitle = (search) => {
    setSearchInput(search)
  }

  // Add movie to or remove movie from the nominations bucket depending on it's origin
  const addOrRemove = (nomination, listType) => {
    if (listType === 'results') {
      let newNominations = [...nominations]
      newNominations.push(nomination)
      setNominations(newNominations)

    } else if (listType === 'nominations') {
      let newNominations = [...nominations]
      newNominations = newNominations.filter(movie => movie.Title !== nomination.Title)
      setNominations(newNominations)
    }
  }

  return (
    <div className='App'>
      <h1> The Shoppies</h1>
      <Search getTitle={getTitle} />
      <div id='container'>
        <Results searchInput={searchInput} addOrRemove={addOrRemove} />
        <Nominations nominations={nominations} addOrRemove={addOrRemove} />
      </div>
    </div>
  );
}

export default App;
