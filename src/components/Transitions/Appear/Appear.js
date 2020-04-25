import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

function appear({ duration, inProp, children }) {
  const defaultStyle = {
    transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    transform: 'translate3d(0, -20px, 0)',
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    entered: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    exiting: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    exited: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}>
          {children}
        </div>
      )}
    </Transition>
  );
}

appear.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  inProp: PropTypes.bool,
};

export default appear;
