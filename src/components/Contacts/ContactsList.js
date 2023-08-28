import { ListItem, Title } from './ContactsList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <Title>Contacts</Title>
      <ul>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
