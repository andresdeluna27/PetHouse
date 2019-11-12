import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from './scenes/Landing'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

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
