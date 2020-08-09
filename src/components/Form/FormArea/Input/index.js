import React from 'react';

import { InputField } from './styles';

function Input({ type, label }) {
  return (
    <InputField>
      <input type={type} required />
      <label>{label}</label>
    </InputField>
  );
}

export default Input;