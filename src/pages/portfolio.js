import React, { useState, useEffect } from 'react';
// import axiosInstance from '../networking/axios';
import classes from './pagesCss/portfolio.module.scss';
import { Transition } from 'react-transition-group';

// import Layout from '../hoc/Layout/Layout';
import Aux from '../hoc/Aux/Aux';
import { Link } from 'gatsby';
// import Post from "../templates/Post/Post"

const portfolio = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
    return () => {
      // cleanup
      setInProp(false);
    };
  }, []);

  const duration = 1000;

  const defaultStyle = {
    transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    transform: 'translate3d(0, -10px, 0)',
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    entered: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    exiting: { opacity: 0, transform: 'translate3d(0, -10px, 0)' },
    exited: { opacity: 0, transform: 'translate3d(0, -10px, 0)' },
  };
  return (
    <Aux>
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}>
            <div className={classes.Header}>
              <span className={classes.Label}>Portfolio</span>
            </div>
          </div>
        )}
      </Transition>

      <Link className={classes.Link} to="/portfolio/project">
        Project
      </Link>
    </Aux>
  );
};

export default portfolio;
