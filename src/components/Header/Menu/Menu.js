import React from 'react';
import MenuMod from './Menu.module.css';

const Menu = (props) => {
   return (
      <div className={ MenuMod.menu }>
         <ul>
            <li onClick={ () => props.handleChangeCurrentTab("mapblock") }>Карта</li>
            <li onClick={ () => props.handleChangeCurrentTab("profile") }>Профиль</li>
            <li onClick={ () => props.handleChangeCurrentTab("login") }>Выйти</li>
         </ul>
      </div>
   );
}

export default Menu;