import React from 'react';
import {Col} from 'reactstrap'

const Solicitud = (props) => {
  return (
    <div className='row'>
        <Col >
          <span>{props.name}</span>
        </Col>
        <Col >
          <span>{props.fecha}</span>
        </Col>
    </div>
  );
}

export default Solicitud;