import './App.scss'
import './CSS/container.scss';
import React, { useState, useEffect } from 'react'
import Search from './Search'
import Results from './Results'
import Nominations from './Nominations'
import Cookies from 'universal-cookie';

function App() {

  // Create a new cookie
  const cookies = new Cookies();


  const [searchInput, setSearchInput] = useState("")
  const [nominations, setNominations] = useState([])

  // On app load, nominations state is set either with an array stored in cookies or an empty array
  useEffect(() => {
    let cookieArray = cookies.get('nominations') || []
    cookies.set('nominations', cookieArray, { path: '/' });
    setNominations(cookies.get('nominations'))
  }, [])

  const getTitle = (search) => {
    setSearchInput(search)
  }

  // Add movie to or remove movie from the nominations bucket depending on it's origin
  // Also add new nominations array to cookie for storage
  const addOrRemove = (nomination, listType) => {
    if (listType === 'results') {
      let newNominations = [...nominations]
      newNominations.push(nomination)
      setNominations(newNominations)
      cookies.set('nominations', newNominations, { path: '/' });
    } else if (listType === 'nominations') {
      let newNominations = [...nominations]
      newNominations = newNominations.filter(movie => movie.Title !== nomination.Title)
      setNominations(newNominations)
      cookies.set('nominations', newNominations, { path: '/' });
    }
  }

  return (
    <div className='App'>
      <h1> The Shoppies</h1>
      <Search getTitle={getTitle} />
      <div id='container'>
        <Results searchInput={searchInput} addOrRemove={addOrRemove} nominations={nominations} />
        <Nominations nominations={nominations} addOrRemove={addOrRemove} />
      </div>
    </div>
  );
}

export default App;
