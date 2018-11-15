import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import nat8 from '../../assets/img/nat-8.jpg';
import nat9 from '../../assets/img/nat-9.jpg';
import videomp4 from '../../assets/img/video.mp4';
import videowebm from '../../assets/img/video.webm';

class Stories extends Component {
  render() {
    return(
      <section className="section-stories">

        <div className="bg-video">
          <video className="bg-video__content" autoPlay loop muted>
            <source src={videomp4} type="video/mp4" />
            <source src={videowebm} type="video/webm" />
              Your browser  is not supported!
          </video>
        </div>

        <div className="u-center-text u-margin-bottom-8">
          <h2 className="heading-secondary">
            We make people genuinely happy
          </h2>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={nat8} alt="Image story" className="story__img" />
              <figcaption className="story__caption">Ania Golas</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary">
                The best experience of my life!
              </h3>
              <p>
                  Lorem ipsum es el texto que se usde borradores de diseño para probar el diseño visual antes de insertar el texto final.
                  itualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img src={nat9} alt="Image story" className="story__img" />
                <figcaption className="story__caption">Kuba Zakrewski</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary">
                  WOW! I want to be back again!
                </h3>
                <p>
                    Lorem ipsum es el texto que se usde borradores de diseño para probar el diseño visual antes de insertar el texto final.
                    itualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-8">
            <Button classes='btn-text' text='Read all stories &rarr;'/>
          </div> 
          
      </section>
    )
  }
}

export default Stories;