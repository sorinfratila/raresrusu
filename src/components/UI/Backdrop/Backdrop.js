import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.scss';

function backdrop(props) {
  const { clicked, show } = props;
  const classesArr = [classes.Backdrop];
  if (!show) {
    classesArr.push(classes.Hidden);
  }

  return <div onClick={clicked} className={classesArr.join(' ')}></div>;
}

backdrop.propTypes = { clicked: PropTypes.func, show: PropTypes.bool };

export default backdrop;
