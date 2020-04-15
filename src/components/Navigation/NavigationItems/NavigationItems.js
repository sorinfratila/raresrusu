import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import PropTypes from 'prop-types';

function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem show={props.show} link={'home'}>
        Home
      </NavigationItem>
      <NavigationItem show={props.show} link={'portfolio'}>
        Portfolio
      </NavigationItem>
      <NavigationItem show={props.show} link={'about'}>
        About
      </NavigationItem>
      <NavigationItem show={props.show} link={'blog'}>
        Blog
      </NavigationItem>
      <NavigationItem show={props.show} link={'contact'}>
        Contact
      </NavigationItem>
    </ul>
  );
}

NavigationItems.propTypes = {
  show: PropTypes.bool,
};

export default NavigationItems;
