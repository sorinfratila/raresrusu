import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Menu.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

function Menu(props) {
  const { clicked, show } = props;

  const classAgr = [classes.MenuItems];
  if (!show) classAgr.push('Closed');

  return (
    <Aux>
      <Backdrop
        style={{ display: show ? 'block' : 'none' }}
        clicked={clicked}></Backdrop>
      <div className={classAgr.join(' ')}>
        <NavigationItems show={show}></NavigationItems>
      </div>
    </Aux>
  );
}

Menu.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
};

export default Menu;
