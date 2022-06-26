import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Container>
    <Div1>
      <Link href ="/">
        <a style ={{display: "flex", alighItems: "center", color: "white"}}>
          <DiCssdeck size= "3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
  </Container>
  
);

export default Hero;