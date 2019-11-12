import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Formulario = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'>Nombre</Label>
        <Input value={props.valores.nombrePersona} type='text' name='nombrePersona' id='nombre' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
        <br/>
        <Label for='exampleEmail'>Apellido Parterno</Label>
        <Input value={props.valores.apellidoP} type='text' name='apellidoP' id='apellidoP' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
        <br/>
        <Label for='exampleEmail'>Apellido Materno</Label>
        <Input value={props.valores.apellidoM} type='text' name='apellidoM' id='apellidoM' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
        <br/>
        <Label for='exampleEmail'>Edad</Label>
        <Input value={props.valores.edadPersona} type='number' name='edadPersona' id='edad' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
      </FormGroup>
      <Button onClick={e => props.agregar()}>Dar de alta</Button>
    </Form>
  );
}

export default Formulario;