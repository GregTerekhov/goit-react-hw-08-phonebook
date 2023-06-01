import styled from '@emotion/styled';

export const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: #3160cd;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const FilterInput = styled.input`
  width: 400px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #959595;
  outline: none;
  padding: 8px 16px;
  transition: border-color 250ms ease, box-shadow 250ms ease;

  &::placeholder {
    color: #959595;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: #3160cd;
    box-shadow: 0px 1px 7px 1px #4e4e4e;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding: 16px;
    width: 700px;
  }
`;
