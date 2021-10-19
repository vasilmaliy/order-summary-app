import React from 'react';
import cl from './Button.module.css';

const Button = ( props ) => {
  return <button className={cl.paymentButton}>{props.children}</button>
}

export default Button;
