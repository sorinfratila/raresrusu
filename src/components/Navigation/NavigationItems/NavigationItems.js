import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import PropTypes from 'prop-types';

function NavigationItems(props) {
  const { show } = props;
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem show={show} link={''}>
        Home
      </NavigationItem>
      <NavigationItem show={show} link={'portfolio'}>
        Portfolio
      </NavigationItem>
      <NavigationItem show={show} link={'about'}>
        About
      </NavigationItem>
      <NavigationItem show={show} link={'blog'}>
        Blog
      </NavigationItem>
      <NavigationItem show={show} link={'contact'}>
        Contact
      </NavigationItem>
    </ul>
  );
}

NavigationItems.propTypes = {
  show: PropTypes.bool,
};

export default NavigationItems;
