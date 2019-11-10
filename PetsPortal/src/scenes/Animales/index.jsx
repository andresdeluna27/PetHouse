import React, { Component } from 'react'
import Card from '../../components/Cards'
import { Row, Col, Input } from 'reactstrap'
import { relative } from 'path';
import Select from './animalSelector'

class Animales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            max: 1,
            titulo: 'perros'
        }
    }
    generateCards = () => {
        const adoptarBoton = (id) =>
            this.adoptar(id)

        let element = []
        let rows = []
        for (let i = 0; i < 3; i++) {
            rows = [<Col lg='3'><Card 
            items={[{valor:'tipo'}]} 
            key={i + 'card'} 
            title={this.state.titulo + i} 
            adoptar={adoptarBoton}
            /></Col>]
            element = element.concat(rows)
        }

        return element
    }

    handleSelect = (val) => {
        this.setState({
            titulo: val
        })
    }

    generateSelect = () =>{
        const handleSelectFunc = (val) =>
            this.handleSelect(val)
            return <Select handleSelectF={handleSelectFunc}  />
    }

    adoptar = (id) =>{
        console.log('adoptar a : '+id)
    }
    
    render() {
        return (
            <div>
                <h1>Animales</h1>
                {this.generateSelect()}
                <Row style={{ pading: '5px' }}>
                    {this.generateCards()}
                </Row>

            </div>
        );
    }
}

export default Animales;