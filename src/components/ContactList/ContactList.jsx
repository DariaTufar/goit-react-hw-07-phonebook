
import { Contact } from '../Contact';
import { ContactsUl } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux'


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filteredValue = useSelector(getFilter);
   

    const filteredContacts = () => {
        return filteredValue
            ? contacts.filter(contact => contact.name.toLowerCase().includes(filteredValue))
            : contacts;
    };
    
    return (
        <ContactsUl>
           
            {
                 filteredContacts().map(({id, name, number}) => (
                
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            )
            )}
        </ContactsUl>
    );
}