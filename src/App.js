import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import MovieDetail from "./components/MovieDetail";
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((rawData) => rawData.json())
      .then((response) => {
        setState(response.results);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Star Wars</h1>
      </header>

      {state?.length == 0 && <img src="/loader.svg" />}

      <div className="grid-container">
        {state.map((item) => (
          <MovieCard
            title={item.title}
            date={item.release_date}
            description={item.opening_crawl}
          />
        ))}
      </div>
    </div>
  );
}
