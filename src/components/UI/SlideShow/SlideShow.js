import React from 'react';
import classes from './SlideShow.module.scss';
// import Img from 'gatsby-image';
import PropTypes from 'prop-types';

function SlideShow(props) {
  const { images } = props;
  const imgArr = images.map(img => (
    <li key={img}>
      <img src={img} alt={img} />
    </li>
  ));

  return (
    <div className={classes.Slides}>
      <ul>{imgArr}</ul>
    </div>
  );
}

SlideShow.propTypes = {
  images: PropTypes.any,
};

export default SlideShow;
