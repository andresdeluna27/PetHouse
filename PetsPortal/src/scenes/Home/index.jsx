import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap'
import Card from '../../components/Cards'
import './home.css'
import { Link, NavLink } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Container>
                <Row >show some love</Row>
                <Row>
                    <Col className='' lg='2' >
                    <NavLink calssName='cards' tag={Link} to={'/about'}>
                        <Card title='Sobre Nosotros' bodyText='info...' />
                    </NavLink>
                        
                    </Col>
                    <Col className='cards' lg='2' tag={Link} to={'/animales'}>
                        <Card title='Aimgos' bodyText='Encuentra tu proximo amigo'  />
                    </Col>
                    <Col className='cards' lg='2' tag={Link} to={'/admin'}>
                        <Card title='Personas' bodyText='lorem' />
                    </Col>
                    <Col className='cards' lg='2' tag={Link} to={'/centros'}>
                        <Card title='Centros' bodyText='lorem' />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;