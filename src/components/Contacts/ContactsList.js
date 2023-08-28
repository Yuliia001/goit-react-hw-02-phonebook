import { Title } from './ContactsList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <Title>Contacts</Title>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} contact={contact}></li>
        ))}
      </ul>
    </>
  );
};
