import React, { useState, useEffect } from 'react';

import Appear from '../components/Transitions/Appear/Appear';
import Aux from '../hoc/Aux/Aux';
import Headline from '../components/UI/Headline/Headline';
import ProjectTile from '../components/ProjectTile/ProjectTile';
import Header from '../components/Header/Header';

const portfolio = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  const navigationItems = [
    { name: 'all projects', to: 'portfolio' },
    { name: 'apps', to: 'portfolio/project' },
    { name: 'artwork', to: 'portfolio/project' },
    { name: 'photography', to: 'portfolio/project' },
    { name: 'UX/UI design', to: 'portfolio/project' },
  ];

  return (
    <Aux>
      <Appear duration={1000} inProp={inProp}>
        <Header menuList={navigationItems}>Portfolio</Header>
        <Headline size="large">Designed by Rares</Headline>
      </Appear>

      <Appear duration={1000} inProp={inProp} delay={400}>
        <ProjectTile></ProjectTile>
        <ProjectTile></ProjectTile>
        <ProjectTile></ProjectTile>
        <ProjectTile></ProjectTile>
        <ProjectTile></ProjectTile>
      </Appear>
    </Aux>
  );
};

export default portfolio;
