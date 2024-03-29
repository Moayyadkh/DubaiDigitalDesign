import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width : 100%;
  

  background-color: Black; 

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  color : white;
  line-height: 1.1;
  margin-bottom: 8px;
  background-color: Black; 

  @media (max-width: 600px) {
    
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  color : red;

  @media (max-width: 600px) {
    
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-length: 50%;
  height: auto;
  

`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  background-color: black; 

  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
       

    }
  }
`;
