import React, { Component } from 'react';
import Feature from '../UI/Feature';


class About extends Component {
  render() {
    return(
      <section className="section-features">
        <div className="row">

          <div className="col-1-of-4">
            <Feature 
              classesIcon='icon-basic-world feature-box__icon'
              classesTitle='heading-tertiary u-margin-bottom-1'
              classesText='feature-box__text'
              title='Explore the world'
              text='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías.'
            />            
          </div>

          <div className="col-1-of-4">
            <Feature 
              classesIcon='icon-basic-compass feature-box__icon'
              classesTitle='heading-tertiary u-margin-bottom-1'
              classesText='feature-box__text'
              title='Meet nature'
              text='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías.'
            />            
          </div>

          <div className="col-1-of-4">
            <Feature 
              classesIcon='icon-basic-map feature-box__icon'
              classesTitle='heading-tertiary u-margin-bottom-1'
              classesText='feature-box__text'
              title='Find your way'
              text='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías.'
            />            
          </div>  

          <div className="col-1-of-4">
            <Feature 
              classesIcon='icon-basic-heart feature-box__icon'
              classesTitle='heading-tertiary u-margin-bottom-1'
              classesText='feature-box__text'
              title='Live a healthier life'
              text='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías.'
            />            
          </div>      
          
        </div>
      </section>
    )
  }
}

export default About;