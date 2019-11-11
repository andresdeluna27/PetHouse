import React, { Component } from 'react'
import Card from '../../components/Cards'
import { Row, Col, Input } from 'reactstrap'
import { relative } from 'path';
import Select from './animalSelector'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { obtenerAnimales } from '../../services/redux/animales/animal-action'

class Animales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            max: 1,
            titulo: 'perros'
        }
    }
    componentDidMount() {
        this.props.obtenerAnimales()
    }
    generateCards = () => {
        const adoptarBoton = (id) =>
            this.adoptar(id)

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
                        adoptar={adoptarBoton}
                    />
                </Col>
            ]
            element = element.concat(rows)
        })

        return element
    }

    handleSelect = (val) => {
        this.setState({
            titulo: val
        })
    }

    generateSelect = () => {
        const handleSelectFunc = (val) =>
            this.handleSelect(val)
        return <Select handleSelectF={handleSelectFunc} />
    }

    adoptar = (id) => {
        console.log('adoptar a : ' + id)
    }

    render() {
        console.log('animales', this.props)
        return (
            <div className='container'>
                <h1>Animales</h1>
                {this.generateSelect()}
                <div className='row no-gutters row-edge' style={{ pading: '5px' }}>
                    {this.generateCards()}
                </div>

            </div>
        );
    }
}
const actionCreators = {
    obtenerAnimales
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
