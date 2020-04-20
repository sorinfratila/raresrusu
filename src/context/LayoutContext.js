import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultContextValue = {
  menuOpen: false,
  toggleMenu: () => {},
};

export const LayoutContext = React.createContext(defaultContextValue);

export const LayoutProvider = props => {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <LayoutContext.Provider
      value={{
        menuOpen,
        toggleMenu: () => toggleMenu(!menuOpen),
      }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node,
};
