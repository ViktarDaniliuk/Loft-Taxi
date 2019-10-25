import React from 'react';
import HeaderMod from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo'
import Menu from './Menu/Menu';

const Header = (props) => {
   return (
      <header className={ HeaderMod.app_header }>
         <HeaderLogo />
         <Menu handleChangeCurrentTab={ props.handleChangeCurrentTab }/>
      </header>
   )
}

export default Header;