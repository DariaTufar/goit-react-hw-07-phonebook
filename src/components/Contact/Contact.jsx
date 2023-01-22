import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

import {
  ContactItem,
  ButtonDelete,
  ContactName,
  ContactNumber,
  Icon,
} from './Contact.styled';
import { TiUser, TiPhoneOutline, } from 'react-icons/ti';
import { Box } from '../Box';
import {theme} from '../../utils'

export const Contact = ({ id, name, phone }) => {
 
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
              <TiUser size={theme.sizes.l} />
            </Icon>
            <ContactName>{name}</ContactName>
            <ContactNumber>
              <Icon>
                <TiPhoneOutline size={theme.sizes.l} />
                {phone}
              </Icon>
            </ContactNumber>
          </Box>
          <Box display="flex">
            <ButtonDelete
              name={id}
              type="button"
              onClick={handleDelete}
              aria-label="Delete contact"
            >
              Delete
            </ButtonDelete>
          </Box>
        </ContactItem>
      </Box>
    </Box>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};