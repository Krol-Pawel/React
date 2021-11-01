import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';
import PropTypes from 'prop-types';


const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} imageSorurce={faqData.image} />
    <p>{faqData.text}</p>
  </Container>
);

Faq.propTypes = {
  image: PropTypes.node,
};

export default Faq;