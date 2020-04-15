import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.scss';

function backdrop(props) {
  const { clicked } = props;

  return <div {...props} onClick={clicked} className={classes.Backdrop}></div>;
}

backdrop.propTypes = { clicked: PropTypes.func };

export default backdrop;
