import React from 'react';
import { Link } from 'gatsby';

import classes from './pagesCss/blog.module.scss';
import Aux from '../hoc/Aux/Aux';
// import Post from "../templates/Post/Post"

const blog = () => {
  return (
    <Aux>
      <div className={classes.Content}></div>
      <Link to="/">Go back to the homepage</Link>
    </Aux>
  );
};

export default blog;
