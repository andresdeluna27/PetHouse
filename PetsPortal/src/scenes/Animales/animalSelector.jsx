import React from 'react';
import { Row, Col, Input } from 'reactstrap';


class AnimalSelec extends React.Component {
    render() {
        return (
        <Row>
            <Col lg='2'>
                <Input type='select' name='select' id='exampleSelect'
                    onChange={e => this.props.handleSelectF(e.target.value)}>
                    <option value='perros'>perros</option>
                    <option value='gatos'>gatos</option>
                    <option value='otros'>otros</option>
                </Input>
            </Col>
        </Row>
        );
    }
}

export default AnimalSelec;