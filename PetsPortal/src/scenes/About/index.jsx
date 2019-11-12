import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <section id="intro" className='fondo' style={{paddingBottom: '50%',backgroundRepeat:'no-repeat', textAlign: 'center'}} >
                <div class="container">

                    <div class="intro-img">
                        
                    </div>

                    <div class="intro-info">
                        <h2>La fundación está dedicada al cuidado de los ecosistemas mediante el <br/>
                            uso de tecnologías disruptivas para analizar el comportamiento de la <br/>
                            flora y la fauna, correlacionar su información y tomar decisiones con base en ella.</h2>
                        <div>
                            <img className={'imagen'} src="https://assets.website-files.com/5aec73392c95ede1c8424bc7/5b11afbd93e3453816a0cf4a_Favicon--256x256.png" alt=""/>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default About;