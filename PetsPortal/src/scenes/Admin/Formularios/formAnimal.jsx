import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormAnimal = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'>Nombre</Label>
        <Input type='text' name='nombre' id='nombre' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
        <br/>
        <Label for='exampleEmail'>Edad</Label>
        <Input type='number' name='edad' id='edad' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
        <br/>
        <Label for='exampleEmail'>Imagen</Label>
        <Input type='text' name='imagen' id='imagen' placeholder='' 
        onChange={e => props.changeValues(e.target.name,e.target.value)} />
      </FormGroup>
      <Button>Agregar</Button>
    </Form>
  );
}

export default FormAnimal;