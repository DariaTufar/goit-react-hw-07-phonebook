import React from 'react';

import { ContactList } from 'components/ContactList';
import { Box } from '../Box';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter';
import background from '../../images/background_blue_abstract.jpg';
import { GlobalStyle } from '../GlobalStyles';


export const App = () => {
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

      <Box display="flex" justifyContent="center">
        <Section title="Contacts">
                <Filter />

                <ContactList />
        </Section>
      </Box>
    </Box>
  );
};
