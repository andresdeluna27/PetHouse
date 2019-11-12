import React, { Component } from 'react'
import Card from '../../components/Cards'
import { Col } from 'reactstrap'
import Select from './animalSelector'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { obtenerAnimales,solicitudAdoptar,elegirSolicitud,obtenerAnimalesPorRaza } from '../../services/redux/animales/animal-action'
import './animales.css'

class Animales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            max: 1,
            titulo: 'perro'
        }
    }
    componentDidMount() {
        this.props.obtenerAnimalesPorRaza(this.state.titulo)
    }
    generateCards = () => {
        const adoptarBoton = (ownerName,id) =>
            this.adoptar(ownerName,id)

        let element = []
        let rows = []
        let items = this.props.animals !== undefined ? this.props.animals : []
        items.map(data => {
            rows = [
                <Col lg={{ size: 3, offset: 1 }}>
                    <Card
                        className='linea'
                        items={[{ valor: 'tipo' }]}
                        key={data.id + data.nombre + 'card'}
                        title={data.nombre}
                        animal={data}
                        adoptar={adoptarBoton}
                    />
                </Col>
            ]
            element = element.concat(rows)
            return data
        })

        return element
    }

    handleSelect = (val) => {
        this.props.obtenerAnimalesPorRaza(val)
        this.setState({
            titulo: val
        })
    }

    generateSelect = () => {
        const handleSelectFunc = (val) =>
            this.handleSelect(val)
        return <Select handleSelectF={handleSelectFunc} valor={this.state} />
    }

    adoptar = (ownerName,id) => {
        let body={
            owner:ownerName,
            animal:id
        }
        this.props.solicitudAdoptar(body)
    }

    render() {
        return (
            <div className='container fondo-animal'>
                <h1>Animales Para Todos</h1>
                <br/>(primero date de alta en el modulo de 'Administrar' y después ingresa tu nombre en la caja de texto de tu animal deseado)
                {this.generateSelect()}
                <div className='row no-gutters row-edge' style={{ pading: '5px' }}>
                    {this.generateCards()}
                </div>

            </div>
        );
    }
}
const actionCreators = {
    obtenerAnimales,
    solicitudAdoptar,
    elegirSolicitud,
    obtenerAnimalesPorRaza
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = state => {
    return {
        animals: state.animalReducer.animals
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Animales)
