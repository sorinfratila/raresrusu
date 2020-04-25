import React, { useState, useEffect } from 'react';

import classes from './pagesCss/portfolio.module.scss';
import Link from '../components/UI/Link/Link';
import Appear from '../components/Transitions/Appear/Appear';
import Aux from '../hoc/Aux/Aux';
import Headline from '../components/UI/Headline/Headline';

const portfolio = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Aux>
      <div className={classes.Header}>
        <Appear duration={750} inProp={inProp}>
          <span className={classes.Label}>Portfolio</span>
          <Link to="/portfolio/project">Project</Link>
        </Appear>
      </div>

      <div className={classes.Title}>
        <Appear duration={750} inProp={inProp}>
          <Headline size="large">Designed by Rares</Headline>
        </Appear>
      </div>
    </Aux>
  );
};

export default portfolio;
