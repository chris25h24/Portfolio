import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <section row nopadding>
   <LeftSection>
     <SectionTitle main center>
        Bienvenue dans <br/>
        Mon Portfolio Personel

     </SectionTitle>
     <SectionText>
       Explique globalement ton projet et quoi tu seras benefique pour eux et ta motivation de les faire.
     </SectionText>
     <Button onClick={() => window.location='https://google.com'}>Learn More</Button>


   </LeftSection>

 </section>
);

export default Hero;