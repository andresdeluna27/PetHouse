import React, { Component } from 'react';
import {Row,Col} from 'reactstrap'
import Card from '../../components/Cards/homeCard'
import './home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        
        let about='https://guidetoiceland.imgix.net/336372/x/0/wildlife-and-animals-in-iceland-10';
        let amigo='https://ecotarium.org/wp-content/uploads/2019/01/SOCKS-1050x1400.jpg';
        let personas='https://images.unsplash.com/photo-1535083783855-76ae62b2914e';
        let centros='https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201812/andreas-dress-1076960-unsplash-770x3993.jpg';
        return (
            <div className='container fondo-home'>
                <Row > 
                    <h1>Welcome to the Animal Village</h1>
                </Row>
                <div className='row no-gutters row-edge' style={{ pading: '5px' }}>
                    <Col lg={{ size: 3 }} tag={Link} to={'/about'}>
                        <Card  title='Sobre Nosotros' imagen={about} bodyText='' />
                    </Col>
                    <Col lg={{ size: 3 }} tag={Link} to={'/animales'}>
                        <Card title='Amigos' imagen={amigo} bodyText='Encuentra tu proximo amigo'  />
                    </Col>
                    <Col lg={{ size: 3 }} tag={Link} to={'/admin'}>
                        <Card title='Administrar' imagen={personas} bodyText='Registro de interesados o animales' />
                    </Col>
                    <Col lg={{ size: 3}} tag={Link} to={'/centros'}>
                        <Card title='Centros' imagen={centros} bodyText='Los centros de Refugio' />
                    </Col>
                </div>
            </div>
        );
    }
}

export default Home;