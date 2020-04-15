import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.scss';
import { Link } from 'gatsby';
import '../../../../App.scss';

function NavigationItem(props) {
  const { link, children, show } = props;
  return (
    <li style={{ opacity: show ? 1 : 0 }} className={classes.NavigationItem}>
      <Link activeClassName="activeLink" to={`/${link}`}>
        {children}
      </Link>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
  show: PropTypes.bool,
};

export default NavigationItem;
