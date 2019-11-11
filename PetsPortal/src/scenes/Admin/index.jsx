import React, { Component } from 'react'
import FormularioP from './Formularios/formPersona'
import FormularioA from './Formularios/formAnimal'
import Selector from '../Animales/animalSelector'
import { Input, FormGroup, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { agreagarPersona, agreagarAnimal } from '../../services/redux/personas/persona-action'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'persona',
            raza: 'perro',
            nombrePersona: '',
            apellidoM:'',
            apellidoP:'',
            edadPersona:1,
            nombre:'',
            edad:1,
            imagen:''
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
        const agreagarPersonaBtn = () =>
            this.agreagarPersonaForm()
        const agreagarAnimalBtn = () =>
            this.agreagarAnimalForm()
        const getValuesFrom = (property, value) =>
            this.getFormValues(property, value)
        return this.state.type === 'persona' ?
            <FormularioP changeValues={getValuesFrom} agregar={agreagarPersonaBtn} />
            :
            (
                <FormGroup>
                    {this.generateSelect()}
                    <FormularioA changeValues={getValuesFrom} agregar={agreagarAnimalBtn} />
                </FormGroup>
            )
    }

    getFormValues = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    agreagarPersonaForm = () => {
        let persona = {
            Nombre: this.state.nombre,
            ApellidoP: this.state.apellidoP,
            ApellidoM: this.state.apellidoM,
            Edad:this.state.edadPersona,
            Domicilio:this.state.domiilio
        }
        this.props.agreagarPersona(persona)
    }

    agreagarAnimalForm = () => {
        let animal = {
            Nombre: this.state.nombre,
            Raza: this.state.raza,
            Edad: this.state.edad,
            Imagen: this.state.imagen,
            CentroId: 5 //sera random
        }
        this.props.agreagarAnimal(animal)
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
const actionCreators = {
    agreagarPersona,
    agreagarAnimal
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = state => {
    return {
        persona: state.personaReducer.persona
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin)