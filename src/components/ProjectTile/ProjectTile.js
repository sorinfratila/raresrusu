import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classes from './ProjectTile.module.scss';
import imgArr from '../../assets/images/portfolio';
// import Img from 'gatsby-image';

function projectTile(props) {
  return (
    <Link className={classes.ProjectTile} to={props.to}>
      <span className={classes.opaque_overlay}></span>
      <img className={classes.img_bg} src={imgArr[0]}></img>
      <span className={classes.wording}>Title</span>
      <img className={classes.img_vg} src={imgArr[1]}></img>
      <span className={classes.btn_overlay}></span>
    </Link>
  );
}

projectTile.propTypes = {
  to: PropTypes.string,
};

export default projectTile;
