import React from 'react';
import cl from './Header.module.css';
import logo from '../../../images/illustration-hero.svg';

const Header = () => {
  return <img className={cl.logo} src={logo} alt="illustration-hero"/>
}

export default Header;
