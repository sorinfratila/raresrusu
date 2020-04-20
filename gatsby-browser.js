/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import PropTypes from 'prop-types';
import { LayoutProvider } from './src/context/LayoutContext';

export const wrapRootElement = ({ element }) => (
  <LayoutProvider>{element}</LayoutProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
