import React, { Component } from 'react'
import FormularioP from './Formularios/formPersona'
import FormularioA from './Formularios/formAnimal'
import Selector from '../Animales/animalSelector'
import { Input, FormGroup, Row, Col } from 'reactstrap'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'persona',
            raza: 'perro'
        }
    }

    handleSelect = (val, menu = false) => {
        menu ?
            this.setState({
                type: val
            }) : this.setState({
                raza: val
            })
    }

    generateSelect = () => {
        const handleSelectFunc = (val, menu = false) =>
            this.handleSelect(val, menu)
        return <Selector handleSelectF={handleSelectFunc} />
    }

    getActualForm = () => {
        const getValuesFrom = (property,value) =>
            this.getFormValues(property,value) 
        return this.state.type === 'persona' ?
            <FormularioP changeValues={getValuesFrom} />
            :
            (
                <FormGroup>
                    {this.generateSelect()}
                    <FormularioA changeValues={getValuesFrom} />
                </FormGroup>
            )
    }

    getFormValues = (property,value) =>{
        this.setState({
            [property]:value
        })
    }

    

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Administrar</h1>
                <Input type='select' name='menuSelect' id='menuSelect'
                    onChange={e => this.handleSelect(e.target.value, true)} value={this.state.type}>
                    <option value='persona'>persona</option>
                    <option value='animal'>animal</option>
                </Input>
                <h2> {this.state.type}</h2>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={{ size: 6, offset: 6 }}>
                        {this.getActualForm()}
                    </Col>
                </Row>

                {/*this.generateSelect()}
                {this.state===1?<FormularioP />:<FormularioP />*/}

            </div>
        );
    }
}

export default Admin;