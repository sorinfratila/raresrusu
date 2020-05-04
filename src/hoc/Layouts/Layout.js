import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../../components/UI/MenuButton/MenuButton';

import Aux from '../Aux/Aux';
import Menu from '../../components/Navigation/Menu/Menu';
import { LayoutContext } from '../../context/LayoutContext';

const layout = props => {
  const { mainMenuOpen, toggleMainMenu } = useContext(LayoutContext);
  const navigationItems = [
    { name: 'home', to: '' },
    { name: 'portfolio', to: 'portfolio' },
    { name: 'about', to: 'about' },
    { name: 'blog', to: 'blog' },
    { name: 'contact', to: 'contact' },
  ];

  return (
    <Aux>
      <MenuButton clicked={() => toggleMainMenu(!mainMenuOpen)}></MenuButton>
      <Menu
        isMain={true}
        show={mainMenuOpen}
        menuList={navigationItems}
        clicked={() => toggleMainMenu(!mainMenuOpen)}
        backdropClicked={() => toggleMainMenu(false)}></Menu>
      <main>{props.children}</main>
    </Aux>
  );
};

layout.propTypes = {
  children: PropTypes.node,
};

export default layout;
