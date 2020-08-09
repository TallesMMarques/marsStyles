import React from 'react';

import { Container, Input, Buttons, Button, ForgotPass } from './styles';

function FormArea() {
  return (
    <Container>
      <Input placeholder="Username" type="text" />
      <Input placeholder="Password" type="password" />

      <Buttons>
        <Button>Sing In</Button>
        <Button>Sing Up</Button>
      </Buttons>

      <ForgotPass>
        Forgot Password?
      </ForgotPass>
    </Container>
  );
}

export default FormArea;