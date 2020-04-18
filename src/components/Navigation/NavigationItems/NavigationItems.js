import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import PropTypes from 'prop-types';

function NavigationItems(props) {
  const { show, clicked } = props;

  const menuList = ['', 'portfolio', 'about', 'blog', 'contact'].map(link => {
    return (
      <NavigationItem clicked={clicked} key={link} show={show} link={link}>
        {link === '' ? 'home' : link}
      </NavigationItem>
    );
  });
  return <ul className={classes.NavigationItems}>{menuList}</ul>;
}

NavigationItems.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default NavigationItems;
