import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export const MessageEmptyList = styled.p`
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
