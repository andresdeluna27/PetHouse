import React, { Component } from 'react';
import './centro.css'
class Centros extends Component {
    
    render() {
        let large ={width:'100%'}
        return (
            <div id='intro' classNameName='fondo container' style={{paddingBottom: '50%',backgroundRepeat:'no-repeat', textAlign: 'center'}} className='fondo'>
                <div className='row tm-gallery' style={{margin:'auto'}}>
				<div id='tm-gallery-page-pizza' className='tm-gallery-page'>
					<article className='col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item'>
						<figure>
							<img src='http://www.hidrocalidodigital.com/fotos/hidro_1_138320.jpg' alt='Image' style={large} className='img-fluid tm-gallery-img' />
							<figcaption>
								<h4 className='tm-gallery-title'>Hay una Gran familia</h4>
								<p className='tm-gallery-description'>nuca estarás sólo</p>
								
							</figcaption>
						</figure>
					</article>
					<article className='col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item'>
						<figure>
							<img src='http://www.nsintesis.com/wp-content/uploads/2018/07/perros-720x445.jpg' alt='Image' style={large} className='centro-imagen img-fluid tm-gallery-img' />
							<figcaption>
								<h4 className='tm-gallery-title'>Las mejores instalaciones</h4>
								<p className='tm-gallery-description'>Ven!</p>
								
							</figcaption>
						</figure>
					</article>
					<article className='col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item'>
						<figure>
							<img src='https://i0.wp.com/www.changoonga.com/wp-content/uploads/2016/02/adopcion-perros-1.jpg'style={large} alt='Image' className='img-fluid tm-gallery-img' />
							<figcaption>
								<h4 className='tm-gallery-title'>Trae a tus amigos</h4>
								<p className='tm-gallery-description'>lleven un nuevo amigo al final</p>
								
							</figcaption>
						</figure>
					</article>
					
					<article className='col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item'>
						<figure>
							<img src='https://www.elgrafico.mx/sites/default/files/styles/f5-689x388/public/2019/07/17/mascotas_rescate_ambulancias_primeros_auxilios_gatos_perros_atencion_medica_adopcion_esterilizacion_centro_de_control_animal_toluca.jpg' style={large} alt='Image' className='img-fluid tm-gallery-img' />
							<figcaption>
								<h4 className='tm-gallery-title'>pregunta con confianza</h4>
								<p className='tm-gallery-description'>Todos merecen irse on nueva familia</p>
								
							</figcaption>
						</figure>
					</article>
				</div>
            </div>
            </div>
        );
    }
}

export default Centros;