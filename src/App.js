import './App.css';
import React, { useState } from 'react'
import Search from './Search'
import Results from './Results'

function App() {

  const [searchInput, setSearchInput] = useState("")

  const getTitle = (search) => {
    setSearchInput(search)
    console.log(search)
  }

  return (
    <div className="App">
      <Search getTitle={getTitle} />
      <div id="container">
        <Results searchInput={searchInput} />
        {/* <Nominations/> */}
      </div>
    </div>
  );
}

export default App;
