import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormAnimal = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'>Nombre</Label>
        <Input value={props.valores.nombre} type='text' name='nombre' id='nombre' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
        <br/>
        <Label for='exampleEmail'>Edad</Label>
        <Input value={props.valores.edad} type='number' name='edad' id='edad' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
        <br/>
        <Label for='exampleEmail'>Imagen</Label>
        <Input value={props.valores.imagen} type='text' name='imagen' id='imagen' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
      </FormGroup>
      <Button onClick={e => props.agregar()}>Agregar</Button>
    </Form>
  );
}

export default FormAnimal;