import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap'
import Card from '../../components/Cards/homeCard'
import './home.css'
import { Link, NavLink } from 'react-router-dom'

class Home extends Component {
    render() {
        let ima='https://image.freepik.com/vector-gratis/escudo-dorado-corona-laurel-dorado_12454-7146.jpg'
        let about='https://guidetoiceland.imgix.net/336372/x/0/wildlife-and-animals-in-iceland-10';
        let amigo='https://ecotarium.org/wp-content/uploads/2019/01/SOCKS-1050x1400.jpg';
        let personas='https://images.unsplash.com/photo-1535083783855-76ae62b2914e';
        let centros='https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201812/andreas-dress-1076960-unsplash-770x3993.jpg';
        return (
            <div className='container fondo-home'>
                <Row >show some love</Row>
                <div className='row no-gutters row-edge' style={{ pading: '5px' }}>
                    <Col lg={{ size: 3 }} tag={Link} to={'/about'}>
                        <Card  title='Sobre Nosotros' imagen={about} bodyText='info...' />
                    </Col>
                    <Col lg={{ size: 3 }} tag={Link} to={'/animales'}>
                        <Card title='Aimgos' imagen={amigo} bodyText='Encuentra tu proximo amigo'  />
                    </Col>
                    <Col lg={{ size: 3 }} tag={Link} to={'/admin'}>
                        <Card title='Personas' imagen={personas} bodyText='lorem' />
                    </Col>
                    <Col lg={{ size: 3}} tag={Link} to={'/centros'}>
                        <Card title='Centros' imagen={centros} bodyText='lorem' />
                    </Col>
                </div>
            </div>
        );
    }
}

export default Home;