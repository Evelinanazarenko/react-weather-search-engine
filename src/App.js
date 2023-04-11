import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchEngine from './SearchEngine';

function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Sydney" />
      <footer>
        <a href="https://github.com/Evelinanazarenko/react-weather-search-engine.git" target="_blank" rel="noreferrer">Open-source code </a>by Evelina Nazarenko
      </footer>
    </div>
  );
}

export default App;
