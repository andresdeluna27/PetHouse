import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Input, Label
  } from 'reactstrap';
import Solicitud from './solicitud'
import './cards-animal.css'

class CardGeneric extends Component {
    constructor(props){
        super(props)
        this.state={
            id:1,
            intereado:''
        }
    }

    componentWillReceiveProps(){
        if(this.props.animal!==undefined){
            this.setState({
                id:this.props.animal.id
            })
        }
    }
    generarSolicitudes = () =>{
        let item = this.props.items!==undefined?this.props.items:[]
        let row = []
        let rowAgg
        item.map(datos => {
            rowAgg = [<Solicitud key={datos.id} />]
            row= row.concat(rowAgg)
            return datos
        })
        return rowAgg
    }
    render() {
        console.log(this.state)
        return (
            <div className={'card-board '+this.props.className}>
                <Card>
                    <CardImg top width='100%' src='https://thoughtcatalog.files.wordpress.com/2018/08/dragons.jpg' alt='Card image cap' />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subTitle}</CardSubtitle>
                        <CardText>{this.props.bodyText}</CardText>
                        <Label for='owner'>Interesado</Label>
                        <Input type='text' name='interesado' id='interesado' placeholder='' 
                        onChange={e => this.setState({
                            interesado: e.target.value
                        })}
                        />
                        <Button onClick={e=>this.props.adoptar(this.state.id,this.state.intereado)}>Adoptar</Button>
                    </CardBody>
                    {this.generarSolicitudes()}
                </Card>
            </div>
        );
    }
}

export default CardGeneric;