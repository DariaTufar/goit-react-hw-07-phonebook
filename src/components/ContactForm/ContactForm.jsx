import {useSelector, useDispatch}  from   'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';


import { Box } from '../Box';
import { InputText, InputTitle, ErrorText, ButtonForm } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { addNewContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
 
// console.log("hello")

const initialValues = {
    name: '',
    number: '',
    id: '',
};
 
let schema = yup.object().shape({
  name: yup.string().required('Please enter the name of the contact.'),
  number: yup
    .string()
    .min(7)
    .max(16)
    .required('Please enter your phone number.'),
});
 

export const ContactForm = () => {
       
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
 
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: 'id' + nanoid(),
    };
    if (contacts.find(contact => contact.name === newContact.name)) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addNewContact(newContact));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Box display="flex" flexDirection="column" gridGap={2}>
            <InputTitle htmlFor="name"> Name</InputTitle>
            <InputText
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage
              name="name"
              component="div"
              render={message => <ErrorText>{message}</ErrorText>}
            />

            <InputTitle> Number </InputTitle>
            <InputText
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage
              name="number"
              component="div"
              render={message => <ErrorText>{message}</ErrorText>}
            ></ErrorMessage>

            <ButtonForm type="submit"> Add contact</ButtonForm>
          </Box>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

