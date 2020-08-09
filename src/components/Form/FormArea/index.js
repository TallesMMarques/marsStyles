import React from 'react';

import { Container, Buttons, Button, ForgotPass } from './styles';
import Input from './Input';

function FormArea() {
  return (
    <Container>
      <Input label="Username" type="text" />
      <Input label="Password" type="password" />

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