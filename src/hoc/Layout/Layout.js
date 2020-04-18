import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../../components/UI/MenuButton/MenuButton';
// import { useStaticQuery, graphql } from "gatsby"

// import Header from './Header/Header';
import Aux from '../Aux/Aux';
import Menu from '../../components/Navigation/Menu/Menu';
import ContextConsumer from '../../context/LayoutContext';

const layout = props => (
  <ContextConsumer>
    {({ data, set }) => {
      // console.log('layout', data, set);
      return (
        <Aux>
          <MenuButton
            clicked={() => set({ menuOpen: !data.menuOpen })}></MenuButton>
          <Menu
            show={data.menuOpen}
            clicked={() => set({ menuOpen: !data.menuOpen })}></Menu>
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
  </ContextConsumer>
);

layout.propTypes = {
  children: PropTypes.node,
};

export default layout;
