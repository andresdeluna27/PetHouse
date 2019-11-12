import React, { Component } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Animales from '../Animales'
import Home from '../Home'
import Admin from '../Admin'
import About from '../About'
import Centros from '../Centros'

class Landing extends Component {
    render() {
        return (
            <div>
                <div style={{background:'#D1FF33'}}>
                
                <NavLink tag={Link} to={'/'}>
                    <img src="https://assets.website-files.com/5aec73392c95ede1c8424bc7/5b11afbd93e3453816a0cf4a_Favicon--256x256.png" 
                    style={{width:'5%',position:'relative'}}
                    alt=""/><span>HOME</span>
                </NavLink>
                </div>
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