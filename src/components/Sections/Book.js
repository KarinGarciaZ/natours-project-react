import React, { Component } from 'react';

class Book extends Component {
  render() {
    return(
      <section className='section-book'>
        <div className='row'>
          <div className='book'>
            <div className='book__form'>

              <div className="u-center-text u-margin-bottom-2">
                <h2 className="heading-secondary">
                  start booking now!
                </h2>
              </div>   
              
              <form action='#' className='form'>
                <div className='form__group'>
                  <input type='text' className='form__input' placeholder='Full name' id='name' required />
                  <label className='form__label' htmlFor='name'>Full name</label>
                </div>

                <div className='form__group'>
                  <input type='email' className='form__input' placeholder='Email' id='email' required />
                  <label className='form__label' htmlFor='email'>Email</label>
                </div>

                <div className='form__group'>                
                  <div className='form__radio-group'>
                    <input type='radio' className='form__radio-input' id='small' name='size'/>
                    <label className='form__radio-label' htmlFor='small'>
                      <span className='form__radio-button'></span>
                      Small tour group</label>
                  </div>

                  <div className='form__radio-group'>
                    <input type='radio' className='form__radio-input' id='large' name='size'/>
                    <label className='form__radio-label' htmlFor='large'>
                      <span className='form__radio-button'></span>
                      Large tour group</label>
                  </div>                  
                </div>

                <div className='form__group'>
                  <button className='btn btn--green'>Next Step &rarr;</button>
                </div>

              </form>
               
            </div>             
          </div>
        </div>
      </section>
    )
  }
}

export default Book;