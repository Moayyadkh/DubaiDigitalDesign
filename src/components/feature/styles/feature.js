import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 10px 45px;

  
`;

export const Title = styled.h1`
color : white;
   
  max-width: 640px;
  font-size: 40px;
  font-weight: 500;
  margin: auto;

  
  background-color: light;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;


export const SubTitle = styled.h2`
  color:  #b50000;
  font-size: 30px;
  font-weight: Bold;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

 