import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import classes from './Header.module.scss';
import Link from '../UI/Link/Link';
import Aux from '../../hoc/Aux/Aux';
import Menu from '../Navigation/Menu/Menu';
import { SubLayoutContext } from '../../context/SubLayoutContext';

const Header = ({ children, menuList = [] }) => {
  const { menuOpen, toggleMenu } = useContext(SubLayoutContext);
  let headerEl = <span className={classes.Label}>{children}</span>;

  if (menuList.length) {
    headerEl = (
      <Aux>
        <span className={classes.Label}>{children}</span>
        <Link type="div" clicked={() => toggleMenu({ menuOpen: !menuOpen })}>
          Project
        </Link>
        <Menu
          isMain={false}
          show={menuOpen}
          menuList={menuList}
          clicked={() => toggleMenu({ menuOpen: !menuOpen })}></Menu>
      </Aux>
    );
  }
  return <header className={classes.Header}>{headerEl}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
  withMenu: PropTypes.bool,
  menuList: PropTypes.array,
};
export default Header;
