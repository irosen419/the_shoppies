import './App.css';
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

  const addNomination = (nomination) => {
    let newNominations = [...nominations]
    newNominations.push(nomination)
    setNominations(newNominations)
  }

  return (
    <div className="App">
      <Search getTitle={getTitle} />
      <div id="container" style={{ display: 'flex' }}>
        <Results searchInput={searchInput} addNomination={addNomination} />
        <Nominations nominations={nominations} />
      </div>
    </div>
  );
}

export default App;
