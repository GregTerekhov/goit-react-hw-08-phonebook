import styled from '@emotion/styled';

export const EditForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const EditLabel = styled.label`
  display: flex;

  flex-direction: column;
  gap: 2px;
  font-size: 12px;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #3160cd;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export const EditInput = styled.input`
  width: 80px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid #959595;
  padding: 4px 8px;
  outline: none;
  transition: border-color 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus,
  &:active {
    border-color: #3160cd;
    box-shadow: 0px 1px 7px 1px #4e4e4e;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 160px;
  }
`;

export const EditActionBtn = styled.button`
  position: relative;
  color: #777674;
  width: 80px;
  font-weight: bold;
  font-size: 12px;
  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,
    rgba(100, 100, 100, 0.3) 3px 7px 3px;
  user-select: none;
  padding: 8px 0;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3px / 100%;
  background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    ),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 0.3)
    ),
    linear-gradient(
      to right,
      rgba(125, 125, 125, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(125, 125, 125, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(125, 125, 125, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(125, 125, 125, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(223, 190, 170, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(223, 190, 170, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(223, 190, 170, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(223, 190, 170, 0.5)
    );
  background-repeat: no-repeat;
  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;
  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;
  backdrop-filter: blur(6px);

  &:disabled {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    transition: 0.5s linear;
    background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
