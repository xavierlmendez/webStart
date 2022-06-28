import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row no padding>
      <LeftSection>
        <SectionTitle>
          Welcome to Xavi's Projects <br />
        </SectionTitle>
        <SectionText>
          This portfolio is to display and archive Xavier (Xavi) Mendez's analytical and software projects. Please note this itself is a project based off a JavaScript Mastery tutorial and because of this is continuously under construction.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}> Recent Projects</Button>
      </LeftSection>
    </Section>     
  
  
);

export default Hero;
