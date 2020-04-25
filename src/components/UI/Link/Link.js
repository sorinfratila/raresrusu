import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classes from './Link.module.scss';
import Aux from '../../../hoc/Aux/Aux';

function link({ type = 'internal', to, children, clicked, ...other }) {
  let element = null;

  switch (type) {
    case 'anchor': {
      element = (
        <a className={classes.Anchor} href={to} onClick={clicked} {...other}>
          {children}
        </a>
      );
      break;
    }
    case 'internal': {
      element = (
        <Link className={classes.Anchor} to={to} onClick={clicked} {...other}>
          {children}
        </Link>
      );
      break;
    }
    default: {
      element = (
        <a className={classes.Anchor} href={to} onClick={clicked} {...other}>
          {children}
        </a>
      );
      break;
    }
  }

  return <Aux>{element}</Aux>;
}

link.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  other: PropTypes.any,
  children: PropTypes.node,
  clicked: PropTypes.func,
};

export default link;
