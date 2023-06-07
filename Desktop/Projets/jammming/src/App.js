import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults';
import Tracklist from './components/Tracklist';



function App() {
  return (
    <div className="App">
      <SearchBar/>
      <SearchResults/>
      <Tracklist/>       
    </div>
  );
}

export default App;
