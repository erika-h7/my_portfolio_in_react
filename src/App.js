import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// pages
import HomePage from './pages/home-page/home-page.components';

const HatsPage = () => (
  <div>
     <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
