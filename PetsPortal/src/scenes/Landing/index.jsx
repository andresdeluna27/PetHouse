import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter, NavLink, Link } from 'react-router-dom'
import Animales from '../Animales'
import Home from '../Home'
import Admin from '../Admin'
import About from '../About'
import Centros from '../Centros'

class Landing extends Component {
    render() {
        return (
            <div>
                <nav>Home</nav>
                <NavLink tag={Link} to={'/'}>home</NavLink>
                <Switch>
                    <Route path='/animales' component={Animales} />
                    <Route exact path='/' component={Home}/>
                    <Route path='/admin' component={Admin} />
                    <Route path='/about' component={About} />
                    <Route path='/centros' component={Centros} />
                </Switch>
            </div>
        );
    }
}

Landing.propTypes = {

};

export default Landing;