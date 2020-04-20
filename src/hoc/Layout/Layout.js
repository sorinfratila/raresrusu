import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../../components/UI/MenuButton/MenuButton';

import Aux from '../Aux/Aux';
import Menu from '../../components/Navigation/Menu/Menu';
import { LayoutContext } from '../../context/LayoutContext';

const layout = props => {
  const { menuOpen, toggleMenu } = useContext(LayoutContext);
  return (
    // <LayoutConsumer>
    //   {({ menuOpen, toggleMenu }) => {
    //     return (
    //       <Aux>
    //         <MenuButton
    //           clicked={() => toggleMenu({ menuOpen: !menuOpen })}></MenuButton>
    //         <Menu
    //           show={menuOpen}
    //           clicked={() => toggleMenu({ menuOpen: !menuOpen })}></Menu>
    //         <main>{props.children}</main>
    //       </Aux>
    //     );
    //   }}
    // </LayoutConsumer>
    <Aux>
      <MenuButton
        clicked={() => toggleMenu({ menuOpen: !menuOpen })}></MenuButton>
      <Menu
        show={menuOpen}
        clicked={() => toggleMenu({ menuOpen: !menuOpen })}></Menu>
      <main>{props.children}</main>
    </Aux>
  );
};

layout.propTypes = {
  children: PropTypes.node,
};

export default layout;
