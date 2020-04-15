import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../hoc/Layout/Layout';
import Image from '../components/image';

class HomePage extends Component {
  state = {
    showMenu: false,
  };

  render() {
    // const { showMenu } = this.state;

    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/Blog/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default HomePage;
