import { Component } from 'react';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './Contacts/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  render() {
    return (
      <Layout>
        <ContactForm onAdd={this.addContact} />
        <ContactList contacts={this.state.contacts} />
        <GlobalStyle />
      </Layout>
    );
  }
}
