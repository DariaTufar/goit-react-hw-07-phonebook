import { createSlice } from '@reduxjs/toolkit';
// import { initialContacts } from '../components/App';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const initialContacts = [];

const initialState = {
  list: initialContacts,
};


export const contactsSlice = createSlice({
  name: "contacts",
  initialState,

   reducers: {
     addNewContact: {
       reducer: (state, action) => {
         state.list.push(action.payload);
       },

       prepare: ({ id, name, number }) => {
         return {
           payload: {
             id,
             name,
             number,
           },
         };
       },
     },
    

    deleteContact(state, action) {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  };

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  deleteContact
);
       
         
           
