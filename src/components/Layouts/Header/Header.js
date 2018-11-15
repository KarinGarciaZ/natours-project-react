import React, { Component } from 'react';
import Logo from '../../../assets/img/logo-white.png';
import Button from '../../UI/Button/Button';

class Header extends Component {

  render() {
    return(
      <header className="header">
      
        <div className="header__logo-box">
          <img src={Logo} alt="logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <Button classes='btn btn--white btn--animated' text='Discover our trips'/>
        </div>

    </header> 
    );
  }
}

export default Header;