import React, { Component } from 'react';
import { Link } from 'gatsby';

import Aux from '../hoc/Aux/Aux';

class HomePage extends Component {
  render() {
    return (
      <Aux>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/portfolio">go to portfolio</Link>
      </Aux>
    );
  }
}

export default HomePage;
