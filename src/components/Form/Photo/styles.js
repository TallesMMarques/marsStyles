import styled from 'styled-components';

export const Container = styled.div`
  grid-area: PH;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 16px 0 0 16px;
  background: rgb(0,0,0);
  background: linear-gradient(30deg, rgba(0,0,0,1) 0%, rgba(107,48,69,1) 100%);
`;

export const Mars = styled.img`
  width: 200px;
  height: 200px;

  /* margin-bottom: 30px; */
  /* margin-top: 30px; */
`;

export const Title = styled.p`
  margin-left: 20px;

  color: var(--orange);
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 20px;
`;