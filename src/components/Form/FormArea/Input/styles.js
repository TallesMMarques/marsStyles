import styled from 'styled-components';

export const InputField = styled.div`
  position: relative;
  /* width: 100%; */

  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    width: 250px;
    height: 35px;
    position: relative;

    margin-bottom: 20px;

    background: transparent;
    border-bottom: 1px var(--pink) solid;

    color: var(--pink);
    font-size: 16px;
    font-weight: 700;

    &::placeholder {
      color: var(--pink);
      font-size: 14px;
      font-weight: 700;
    }
  }

  > label {
    position: absolute;
    left: 0;
    bottom: 22px;

    color: var(--pink);
    font-size: 14px;
    pointer-events: none;

    transition: .3s;
  }

  & input:focus + label,
  & input:valid + label{
    transform: translateY(-28px);
    font-size: 12px;
  }
`;
