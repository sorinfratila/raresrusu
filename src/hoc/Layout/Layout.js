/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../../components/UI/MenuButton/MenuButton';
// import { useStaticQuery, graphql } from "gatsby"

// import Header from './Header/Header';
import Aux from '../Aux/Aux';
import Menu from '../../components/Navigation/Menu/Menu';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    showMenu: false,
  };

  toggleMenuHandler = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu,
      };
    });
  };

  render() {
    const { showMenu } = this.state;
    const { children } = this.props;

    return (
      <Aux>
        <MenuButton clicked={this.toggleMenuHandler}></MenuButton>
        <Menu show={showMenu} clicked={this.toggleMenuHandler}></Menu>
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Aux>
    );
  }
}

export default Layout;
