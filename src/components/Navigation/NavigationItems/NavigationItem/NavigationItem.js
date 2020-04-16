import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.scss';
import { Link } from 'gatsby';
import '../../../../App.scss';

function NavigationItem(props) {
  const { link, children, show } = props;
  const classesArr = [classes.NavigationItem];

  if (show) {
    classesArr.push(classes.On);
  }

  return (
    <li className={classesArr.join(' ')}>
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
