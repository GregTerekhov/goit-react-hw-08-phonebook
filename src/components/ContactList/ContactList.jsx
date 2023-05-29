import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
  const { filteredContacts } = useContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
};
