import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../../components/UI/MenuButton/MenuButton';

import Aux from '../Aux/Aux';
import Menu from '../../components/Navigation/Menu/Menu';
import { LayoutConsumer } from '../../context/LayoutContext';

const layout = props => (
  <LayoutConsumer>
    {({ menuOpen, toggleMenu }) => {
      return (
        <Aux>
          <MenuButton
            clicked={() => toggleMenu({ menuOpen: !menuOpen })}></MenuButton>
          <Menu
            show={menuOpen}
            clicked={() => toggleMenu({ menuOpen: !menuOpen })}></Menu>
          <div>
            <main>{props.children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </Aux>
      );
    }}
  </LayoutConsumer>
);

layout.propTypes = {
  children: PropTypes.node,
};

export default layout;
