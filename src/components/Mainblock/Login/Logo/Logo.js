import React from 'react';
import LogoMod from './Logo.module.css';
import logo from './logo.svg';

const Logo = () => {
   return (
      <img src={logo} className={ LogoMod.logo } alt="logo" />
   );
}

export default Logo;