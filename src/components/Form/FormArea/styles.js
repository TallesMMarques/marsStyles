import styled from 'styled-components';

export const Container = styled.div`
  grid-area: FM;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0 16px 16px 0;
  background: rgb(128,69,51);
  background: linear-gradient(30deg, rgba(128,69,51,1) 0%, rgba(255,79,25,1) 100%);
`;

export const Input = styled.input`
  width: 250px;
  height: 35px;

  margin-bottom: 15px;

  background: transparent;
  border-bottom: 1px var(--pink) solid;

  color: var(--pink);
  font-size: 14px;
  font-weight: 700;

  &::placeholder {
    color: var(--pink);
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Buttons = styled.div`
  width: 250px;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 115px;
  height: 35px;

  border: 1px var(--pink) solid;
  border-radius: 3px;
  background: transparent;

  color: var(--pink);
  font-weight: 400;
  font-size: 16px;

  cursor: pointer;

  transition: background .3s, border .3s;

  &:hover {
    background: var(--pink);
    color: var(--orange);
  }

  &:active {
    background: var(--purple);
    border: 1px var(--purple) solid;
  }
`;

export const ForgotPass = styled.a`
  margin-top: 50px;

  color: var(--pink);
  font-size: 14px;

  cursor: pointer;

  transition: color .3s;
  
  &:hover {
    color: var(--purple);
  } 

  &:active {
    color: var(--pink);
  }
`;
