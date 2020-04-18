import React from 'react';
import { Link } from 'gatsby';
// import classes from './pagesCss/portfolio.module.scss';

import Aux from '../hoc/Aux/Aux';
// import Post from "../templates/Post/Post"

const contact = () => {
  return (
    <Aux>
      <div>contact page</div>
      <Link to="/">Go back to the homepage</Link>
    </Aux>
  );
};

export default contact;
