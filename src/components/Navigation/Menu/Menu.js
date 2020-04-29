import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Menu.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

function Menu({ clicked, show, menuList, isMain }) {
  const classesArr = isMain ? [classes.MenuItems] : [classes.MenuItemsLeft];
  if (show) classesArr.push(classes.Shown);

  return (
    <Aux>
      <Backdrop show={show} clicked={clicked}></Backdrop>
      <div className={classesArr.join(' ')}>
        <NavigationItems
          items={menuList}
          clicked={clicked}
          show={show}></NavigationItems>
      </div>
    </Aux>
  );
}

Menu.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
  linkClicked: PropTypes.func,
  menuList: PropTypes.array,
  isMain: PropTypes.bool,
};

export default Menu;
