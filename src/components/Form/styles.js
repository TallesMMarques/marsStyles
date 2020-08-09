import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;  
`;

export const Grid = styled.div`
  display: grid;

  height: 350px;
  width: 700px;

  grid-template-columns: 50% 50%;
  grid-template-areas: 'PH FM';

  background-color: #555;
  border-radius: 16px;
`;

