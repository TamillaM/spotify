import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <input placeholder='Give a song name...'/>
      <button>Search</button>
    </div>
  )
}

export default SearchBar