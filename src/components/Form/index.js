import React from 'react';

import { Container, Grid } from './styles';

import FormArea from './FormArea';
import Photo from './Photo';

function Form() {
  return (
    <Container>
      <Grid>
        <Photo />
        <FormArea />
      </Grid>
    </Container>
  );
}

export default Form;