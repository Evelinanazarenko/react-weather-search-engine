import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-5 border rounded w-50">
        <h1>Weather in Sydney</h1>
        <div className="row">
          <div className="col-6 d-flex">
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather discription" />
            <span>19</span>
            <div>
              <a href="/">℃</a>|<a href="/">℉</a>
            </div>
            <ul>
              <li>Precipitation:</li>
              <li>Humidity:</li>
              <li>Wind:</li>
            </ul>
          </div>
          <div className="col-6">
            <p>Weather</p>
            <span className="d-block">Monday</span>
            <span className="d-block">Partly cloudy</span>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/Evelinanazarenko/react-weather-search-engine.git" target="_blank" rel="noreferrer">Open-source code </a>by Evelina Nazarenko
      </footer>
    </div>
  );
}

export default App;
