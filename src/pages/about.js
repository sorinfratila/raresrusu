import React from 'react';
import { Link } from 'gatsby';

import Layout from '../hoc/Layout/Layout';
// import PropTypes from "prop-types"

const About = () => {
  // const pages = graphql`
  //   query {
  //     allWordpressPage {
  //       edges {
  //         node {
  //           title
  //           content
  //           excerpt
  //           date
  //           modified
  //           slug
  //           status
  //         }
  //       }
  //     }
  //   }
  // `
  // (id: "e0ebb120-8631-580e-803d-8c457afa622e")

  return (
    <Layout>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

About.propTypes = {
  // prop: PropTypes,
};

export default About;
