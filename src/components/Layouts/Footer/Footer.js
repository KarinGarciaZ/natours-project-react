import React, { Component } from 'react';
import Logo from '../../../assets/img/logo-green-small-2x.png';

class Footer extends Component {
  render() {
    return(
      <footer className='footer'>
        <div className='footer__logo-box'>
          <img src={Logo} alt='Full logo' className='footer__logo' />        
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'><a href='#' className='footer__link'>Company</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Contact us</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Carrers</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Privacy Policy</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Terms</a></li>
              </ul>
            </div>
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              Built by <a href='#' className='footer__link'>Oscar Jovanny García Zepeda</a>. Copyright &copy; by JonasSchmedtmann.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;