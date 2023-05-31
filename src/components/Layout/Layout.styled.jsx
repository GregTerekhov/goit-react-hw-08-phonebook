import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 32px 0;
`;

export const Container = styled.div`
  margin: auto;
  padding: 0 16px;
  width: 480px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 24px;
    width: 1200px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 288px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  width: 96px;
  color: #777674;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,
    rgba(100, 100, 100, 0.3) 3px 7px 3px;
  user-select: none;
  padding: 8px 16px;
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
`;

export const Section = styled.section`
  display: flex;
  padding: 24px 0;
  width: 100%;
  height: 100vh;
`;
