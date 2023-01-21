import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

import {
  ContactItem,
  ButtonDelete,
  ContactNumber,
  Icon,
} from './Contact.styled';
import { TiUser, TiPhoneOutline, } from 'react-icons/ti';
import { Box } from '../Box';
import {theme} from '../../utils'

export const Contact = ({ id, name, number }) => {
 
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  
  return (
    <Box
      as="ul"
      display="flex"
      width="1200px"
      alignItems="center"
      justifyContent="center"
    >
      <Box as="li" display="flex" justifyContent="space-between">
        <ContactItem>
          <Box display="flex" flexDirection="raw">
            <Icon>
              {' '}
              <TiUser size={theme.sizes.l} />
            </Icon>
            {name}:{' '}
            <ContactNumber>
              <Icon>
                <TiPhoneOutline size={theme.sizes.l} />

                {number}
              </Icon>
            </ContactNumber>
          </Box>
          <Box display="flex">
            <ButtonDelete
              name={id}
              type="button"
              onClick={handleDelete}
              aria-label="Delete contact">
                            Delete
            </ButtonDelete>
          </Box>
        </ContactItem>
      </Box>
    </Box>
  );
};
