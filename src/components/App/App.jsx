import React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';


import { ContactList } from 'components/ContactList';
import { Box } from '../Box';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter';
import background from '../../images/background_blue_abstract.jpg';
import { GlobalStyle } from '../GlobalStyles';


export const App = () => {
    const dispatsh = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
      dispatsh(fetchContacts());
    }, [dispatsh]);
  
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <GlobalStyle />

      <Box
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      >
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      </Box>

      {isLoading && !error && <b>Request in progress...</b>}
      
      <Box display="flex" justifyContent="center">
        <Section title="Contacts">
          <Filter />

          <ContactList />
        </Section>
      </Box>
    </Box>
  );
};
