import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <section id="intro" style={{ backgroundImage: "url('https://image.freepik.com/vector-gratis/fondo-malla-degradado-abstracto-borrosa_1159-3175.jpg')"
            ,paddingBottom: '50%',backgroundRepeat:'no-repeat', textAlign: 'center'}} class="fondo">
                <div class="container">

                    <div class="intro-img">
                        
                    </div>

                    <div class="intro-info">
                        <h2>We provide<br /><span>solutions</span><br />for your business!</h2>
                        <div>
                            <a href="#about" class="btn-get-started scrollto">Get Started</a>
                            <a href="#services" class="btn-services scrollto">Our Services</a>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default About;