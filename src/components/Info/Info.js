import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} imageSource={infoData.image} />
    {/* <h2>{infoData.title}</h2> */}
    <p>{infoData.text}</p>
  </Container>
);

export default Info;