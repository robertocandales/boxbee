import styled from 'styled-components';

export const WrapperCard = styled.div`
  width: 97%;
  height: 80%vh;
  padding: 32px 30px 129px 52px;
  border-radius: 50px;
  background-color: #ffffff; 
`;

/////////////Inner Cards Style//////////////


export const InnerCard = styled.div`
  width: 300px;
  height: 200px;
  margin: 65px 36px 32px 0;
  padding: 15px 25px 165px 28px;
  border-radius: 25px;
  box-shadow: ${(props) => props.boxShadow ? "0 10px 40px -10px rgba(0, 0, 0, 0.3)" : "none"} ;
  background-color: ${(props) => props.backgroundColor || "#ffffff"}; 
`;

export const Title = styled.div`
  width: 100%;
  height: 56px;
  margin: 45px 4px 48px 0;
  font-family: Avenir;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #000000; 
`;

export const IconCard = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: -15%;
`;

export const CheckIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -7%;
`;

export const TitleCard = styled.div`
  
  margin: 24px 0.5px 5px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.14px;
  color: rgba(0, 0, 0, 0.87); 
`;

export const Paragraph = styled.div`
  
  
  margin: 5px 1.4px 24px 0.5px;
  opacity: 0.8;
  font-family: Avenir;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.87);
`;

export const CardBut = styled.div`
  
  
  border-radius: 15px;
  background-color: var(--goldgenrod);
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 9%;
`;

export const CardsFlex = styled.div`
  display: flex;  
  flex-wrap: wrap;
`;

export const AroundUpButton = styled.div`
  margin: 10px 10px 30px 10px;
`;

