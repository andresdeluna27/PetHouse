import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import './cards-animal.css'

class HomeCard extends Component {
    constructor(props){
        super(props)
        this.state={
            id:1
        }
    }
    render() {
        return (
            <div className={'card-board '+this.props.className}>
                <Card>
                    <CardImg top width='100%' src={this.props.imagen} alt='Card image cap' />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subTitle}</CardSubtitle>
                        <CardText>{this.props.bodyText}</CardText>
                        <Button >VAMOS</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default HomeCard;