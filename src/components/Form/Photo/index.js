import React from 'react';
import mars from '../../../assets/mars.png'


import { Container, Mars, Title } from './styles';

function Photo() {
  return (
    <Container>
      <Mars src={mars} />
      <Title>Martian</Title>
    </Container>
  );
}

export default Photo;