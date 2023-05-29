import { useEffect } from 'react';
import { useContacts } from 'hooks/useContacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  Container,
  Title,
  SubTitle,
  MessageEmptyList,
} from './Contacts.styled';

const Contacts = () => {
  const { contacts, fetchContacts } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {!!contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <MessageEmptyList>
          Unfortunately, there is no contact here. Please enter your first
          contact
        </MessageEmptyList>
      )}
    </Container>
  );
};

export default Contacts;
