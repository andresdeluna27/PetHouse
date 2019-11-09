import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import {NavLink, Link} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from './scenes/Landing'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

export default class App extends Component {
  displayName = App.name
  
  render() {
    return (
      <Router basename={baseUrl}>
        
        <Landing />
        {/*<Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />*/}
      </Router>
    );
  }
}
