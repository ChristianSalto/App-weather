import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/city">
          <CityPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
