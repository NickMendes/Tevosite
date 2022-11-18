import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
