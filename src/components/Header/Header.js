import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './Header.css';
import './images/logo.png';

function Header() {
  return (
    <div className="header">
      <div className="header__logo"></div>
    </div>
  );
}

export default Header;
