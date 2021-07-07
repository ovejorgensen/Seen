import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import SeriesPage  from './pages/SeriesPage/SeriesPage';
import MoviePage  from './pages/MoviePage/MoviePage';
import NavBar from './components/navbar/Navbar';

const App = () => (
      <Router>
        <NavBar/>
        <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/series" component={SeriesPage} />
            <Route path="/movies" component={MoviePage} />
        </Switch>
      </Router>
    );

export default App;
