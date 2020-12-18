import './App.scss'
import './CSS/container.scss';
import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import Search from './Search'
import Results from './Results'
import Nominations from './Nominations'

function App() {

  var cookies = new Cookies();

  const [searchInput, setSearchInput] = useState("")
  const [nominations, setNominations] = useState(cookies.get('nominations'))

  const getTitle = (search) => {
    setSearchInput(search)
  }

  const addOrRemove = (nomination, listType) => {
    if (listType === 'results') {
      let newNominations = [...nominations]
      newNominations.push(nomination)
      setNominations(newNominations)
      cookies.set('nominations', newNominations, { path: '/' });

    } else if (listType === 'nominations') {
      let newNominations = [...nominations]
      newNominations = newNominations.filter(movie => movie.Title !== nomination.Title)
      console.log("Noms: ", newNominations)
      setNominations(newNominations)
      cookies.set('nominations', newNominations, { path: '/' })
    }
  }

  return (
    <div className='App'>
      <Search getTitle={getTitle} />
      <div id='container'>
        <Results searchInput={searchInput} addOrRemove={addOrRemove} cookies={cookies} />
        <Nominations nominations={nominations} addOrRemove={addOrRemove} />
      </div>
    </div>
  );
}

export default App;
