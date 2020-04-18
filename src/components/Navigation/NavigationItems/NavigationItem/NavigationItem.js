import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.scss';
import { Link } from 'gatsby';
import '../../../../App.scss';

function NavigationItem(props) {
  const { link, children, show, clicked } = props;
  const classesArr = [classes.NavigationItem];

  if (show) {
    classesArr.push(classes.On);
  }

  return (
    <li className={classesArr.join(' ')}>
      <Link
        onClick={clicked}
        activeStyle={{ color: '#6d6d6d' }}
        to={`/${link}`}>
        {children}
      </Link>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default NavigationItem;
