import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Animales from '../Animales'
import Home from '../Home'
import Admin from '../Admin'

class Landing extends Component {
    render() {
        return (
            <div>
                <nav>Home</nav>
                <Switch>
                    <Route path='/animales' component={Animales} />
                    <Route path='/' component={Home}/>
                    <Route path='/admin' component={Admin} />
                </Switch>
            </div>
        );
    }
}

Landing.propTypes = {

};

export default Landing;