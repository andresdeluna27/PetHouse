import React, { Component } from 'react'
import Card from '../../components/Cards'
import { Row, Col } from 'reactstrap'
import { Dropdown } from 'react-bootstrap'
import { relative } from 'path';

class Animales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            max: 1,
            titulo: 'perros'
        }
    }
    generateCards = () => {
        let element = []
        let rows = []
        for (let i = 0; i < 3; i++) {
            rows = [<Col lg='3'><Card key={i + 'card'} title={this.state.titulo + i} /></Col>]
            element = element.concat(rows)
        }

        return element
    }

    handleSelect = (val) =>{
        this.setState({
            titulo: val.target.value
        })
        console.log(val)
    }
    render() {
        return (
            <div>
                <h1>Animales</h1>
                <select onChange={e => this.handleSelect(e)}>
                    <option value='perros'>perros</option>
                    <option value='gatos'>gatos</option>
                    <option value='otros'>otros</option>
                </select>
                
                <Row style={{ pading: '5px' }}>
                    {this.generateCards()}
                </Row>

            </div>
        );
    }
}

export default Animales;