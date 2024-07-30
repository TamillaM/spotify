import './App.css';
import SearchBar from '../Searchbar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList.js';
import Header from '../Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <div className='main'>
        <SearchResults/>
        <PlayList/>
      </div>
    </div>
  );
}

export default App;
