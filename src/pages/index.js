import React, { Component } from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import Aux from '../hoc/Aux/Aux';

class HomePage extends Component {
  state = {
    showMenu: false,
  };

  render() {
    // const { showMenu } = this.state;

    return (
      <Aux>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/portfolio">go to portfolio</Link>
      </Aux>
    );
  }
}

export default HomePage;
