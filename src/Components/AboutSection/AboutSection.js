import React from 'react';
import Section from '../UI/Section/Section';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import classes from './AboutSection.module.css';

const AboutSection = (props) => {
    return(
        <Section>
            <SectionHeading>About HeyCart</SectionHeading>
            <p className={classes.paragraph}> Loremipsum dolas.......................</p>
        </Section>
    );
}

export default AboutSection;