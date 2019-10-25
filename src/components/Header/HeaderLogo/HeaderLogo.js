import React from 'react';
import HeaderLogoMod from './HeaderLogo.module.css';
import logo from './logo.svg';

const HeaderLogo = () => {
   return (
      <img src={logo} className={ HeaderLogoMod.logo } alt="logo" />
   );
}

export default HeaderLogo;