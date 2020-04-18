import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultContextValue = {
  menuOpen: false,
  toggleMenu: () => {},
};

const LayoutContext = React.createContext(defaultContextValue);

export default class LayoutProvider extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuOpen: !state.menuOpen,
    }));
  };

  render() {
    const { menuOpen } = this.state;
    const { children } = this.props;

    return (
      <LayoutContext.Provider value={{ menuOpen, toggleMenu: this.toggleMenu }}>
        {children}
      </LayoutContext.Provider>
    );
  }
}

export const LayoutConsumer = LayoutContext.Consumer;
