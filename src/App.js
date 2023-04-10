import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-5 border rounded pb-4">
        <form>
          <div className="row mt-3 mb-3">
            <div className="col-9">
              <input type="search" placeholder="Type the city.." className="form-control" />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>

          </div>
        </form>
        <div className="discription-date">
          <h1>Sydney</h1>
          <ul>
            <li>Monday</li>
            <li>Partly cloudy</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-center first-column-descriprion">
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather discription" />
            <span>19</span>
            <div>
              <a href="/">℃</a>|<a href="/">℉</a>
            </div>
          </div>
          <div className="col-6 second-column-descriprion">
            <ul>
              <li>Precipitation:</li>
              <li>Humidity:</li>
              <li>Wind:</li>
            </ul>
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
