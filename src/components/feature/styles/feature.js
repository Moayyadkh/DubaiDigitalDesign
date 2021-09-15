import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;

  
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
  margin-top: 0px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: red;
  font-size: 26px;
  font-weight: normal;
  
  margin-top: 0px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
