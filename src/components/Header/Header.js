import { Link } from 'gatsby';
import classes from './Header.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Container}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            {siteTitle}
          </Link>
        </h1>
        <h1>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            About
          </Link>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
