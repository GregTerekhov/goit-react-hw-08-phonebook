import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const FormEl = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: start;
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

export const FormInput = styled(Field)`
  width: 400px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #959595;
  padding: 8px 16px;
  outline: none;
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
    width: 700px;
    font-size: 24px;
    padding: 16px;
  }
`;

export const ErrorMessageForUser = styled(ErrorMessage)`
  text-align: justify;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const FormButton = styled.button`
  position: relative;
  display: inline-block;
  color: #777674;
  font-size: 16px;
  font-weight: bold;
  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,
    rgba(100, 100, 100, 0.3) 3px 7px 3px;
  user-select: none;
  padding: 16px 24px;
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

  &:hover,
  &:focus {
    transition: 0.5s linear;
    background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding: 16px 32px;
  }
`;
