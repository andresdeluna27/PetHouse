import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Input, Label
  } from 'reactstrap';
import Solicitud from './solicitud'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { obtenerSolicitudes } from '../../services/redux/animales/animal-action'

import './cards-animal.css'

class CardGeneric extends Component {
    constructor(props){
        super(props)
        this.state={
            id:1,
            interesado:'',
            hidden:true
        }
    }
    componentDidMount(){
        this.props.obtenerSolicitudes(this.state.id)
    }

    componentWillReceiveProps(){
        if(this.props.animal!==undefined){
            this.setState({
                id:this.props.animal.id
            })
        }
    }
    generarSolicitudes = () =>{
        let item = this.props.solic!==undefined?this.props.solic:[]
        let row = []
        let rowAgg = []
        console.log('aquiiiiiii',item)
        item.map(datos => {
            rowAgg = [<Solicitud key={datos.id} fecha={datos.fecha} name={this.props.animal.nombre} />]
            row= row.concat(rowAgg)
            return datos
        })
        return row.length===0?(<sapan>Puedes ser el primero<br/></sapan>):row
    }
    render() {
        console.log(this.props,'soli')
        return (
            <div className={'card-board '+this.props.className}>
                <Card onClick={e => this.setState(prevState =>{
                    return ({
                        hidden: !prevState.hidden
                    })
                })}>
                    <CardImg top width='100%' src='https://thoughtcatalog.files.wordpress.com/2018/08/dragons.jpg' alt='Card image cap' />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subTitle}</CardSubtitle>
                        <CardText>{this.props.bodyText}</CardText>
                        {this.state.hidden?(<sapan>Haz click para ver las personas interesadas<br/></sapan>):this.generarSolicitudes()}
                        <Label for='owner'>Interesado</Label>
                        <Input type='text' name='interesado' id='interesado' placeholder='' 
                        onChange={e => this.setState({
                            interesado: e.target.value
                        })}
                        />
                        <Button onClick={e=>this.props.adoptar(this.state.interesado,this.state.id)}>Adoptar</Button>
                        
                    </CardBody>
                    
                </Card>
            </div>
        );
    }
}
const actionCreators = {
    obtenerSolicitudes
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = state => {
    return {
        solic: state.animalReducer.solicitudes
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardGeneric)