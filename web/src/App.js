import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router basename='/'>
        <Switch>
          <Route exact path='/' render={(props) => (<Home {...props}/>)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
