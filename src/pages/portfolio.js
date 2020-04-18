import React from 'react';
import { Link } from 'gatsby';
// import classes from './pagesCss/portfolio.module.scss';

// import Layout from '../hoc/Layout/Layout';
import Aux from '../hoc/Aux/Aux';
// import Post from "../templates/Post/Post"

const portfolio = () => {
  return (
    <Aux>
      <div>Portfolio page</div>
      <Link to="/">Go back to the homepage</Link>
    </Aux>
  );
};

export default portfolio;
