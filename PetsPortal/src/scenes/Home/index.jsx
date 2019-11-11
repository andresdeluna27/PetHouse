import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap'
import Card from '../../components/Cards/homeCard'
import './home.css'
import { Link, NavLink } from 'react-router-dom'

class Home extends Component {
    render() {
        let ima='https://image.freepik.com/vector-gratis/escudo-dorado-corona-laurel-dorado_12454-7146.jpg'
        return (
            <div className='container'>
                <Row >show some love</Row>
                <div className='row no-gutters row-edge' style={{ pading: '5px' }}>
                    <Col className='cards' lg={{ size: 3 }} >
                    <NavLink calssName='cards' tag={Link} to={'/about'}>
                        <Card title='Sobre Nosotros' imagen={ima} bodyText='info...' />
                    </NavLink>
                        
                    </Col>
                    <Col className='cards' lg={{ size: 3 }} tag={Link} to={'/animales'}>
                        <Card title='Aimgos' imagen={ima} bodyText='Encuentra tu proximo amigo'  />
                    </Col>
                    <Col className='cards' lg={{ size: 3 }} tag={Link} to={'/admin'}>
                        <Card title='Personas' imagen={ima} bodyText='lorem' />
                    </Col>
                    <Col className='cards' lg={{ size: 3}} tag={Link} to={'/centros'}>
                        <Card title='Centros' imagen={ima} bodyText='lorem' />
                    </Col>
                </div>
            </div>
        );
    }
}

export default Home;