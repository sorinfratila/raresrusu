import React from 'react';
import { Link } from 'gatsby';

import Aux from '../hoc/Aux/Aux';
// import PropTypes from "prop-types"

const about = () => {
  return (
    <Aux>
      <div>about page</div>
      <Link to="/">Go back to the homepage</Link>
    </Aux>
  );
};

about.propTypes = {
  // prop: PropTypes,
};

export default about;
