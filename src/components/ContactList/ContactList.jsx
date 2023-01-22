
import { Contact } from '../Contact';
import { ContactsUl } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux'


export const ContactList = () => {
    const contacts = useSelector(selectContacts);
     
    const filteredValue = useSelector(selectFilter);
   

    const filteredContacts = () => {
        return filteredValue
            ? contacts.filter(contact => contact.name.toLowerCase().includes(filteredValue))
            : contacts;
    };
    
    return (
        
        <ContactsUl>
            
            {
                filteredContacts().map(({id, name, phone}) => (
                
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    phone={phone}
                        
                    />
                 )
            )}
        </ContactsUl>
    );
}