import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import nat1 from '../../assets/img/nat-1-large.jpg';
import nat2 from '../../assets/img/nat-2-large.jpg';
import nat3 from '../../assets/img/nat-3-large.jpg';


class About extends Component {
  render() {
    return(
      <section className="section-about">

        <div className="u-center-text u-margin-bottom-5">
          <h2 className="heading-secondary">
            Exciting tours for adventours people
          </h2>
        </div>     

        <div className="row">

          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-1">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph u-margin-bottom-2">
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-1">
                Live adventures like you never have before
            </h3>
            <p className="paragraph">
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
            </p>

            <Button classes='btn-text' text='Learn more &rarr;'/>
          </div>

          <div className="col-1-of-2">
              <div className="composition">
                <img src={nat1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                <img src={nat2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                <img src={nat3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
              </div>
          </div>

        </div>
      </section>
    )
  }
}

export default About;