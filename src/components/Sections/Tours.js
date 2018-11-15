import React, {Component} from 'react';
import Button from '../UI/Button/Button';

class Tours extends Component {
  render() {
    return(
      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-5">
          <h2 className="heading-secondary">
            Most popular tours
          </h2>
        </div>     

        <div className="row">

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">        
                  &nbsp;          
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">The sea explorer</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$273</p>                    
                  </div>                  
                  <Button classes='btn btn--white' text='Book now!'/> 
                </div>                              
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">        
                  &nbsp;          
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">The forest hiker</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>2 day tours</li>
                    <li>Up to 40 people</li>
                    <li>1 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$209</p>                    
                  </div>                  
                  <Button classes='btn btn--white' text='Book now!'/>
                </div>      
              </div>
            </div>    
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">        
                  &nbsp;          
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">The snow adventurer</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>1 day tour</li>
                    <li>Up to 25 people</li>
                    <li>1 tour guides</li>
                    <li>Make it possible</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$171</p>                    
                  </div>                  
                  <Button classes='btn btn--white' text='Book now!'/>
                </div>      
              </div>
            </div>
          </div>

        </div>

        <div className="u-center-text u-margin-top-8">
          <Button classes='btn btn--green' text='Discover all tours'/>
        </div> 
        
      </section>

    );
  }
}

export default Tours;