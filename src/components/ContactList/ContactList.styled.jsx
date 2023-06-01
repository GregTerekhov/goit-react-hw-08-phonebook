import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  & + & {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-end;

    & + & {
      margin-top: 16px;
    }
  }
`;
