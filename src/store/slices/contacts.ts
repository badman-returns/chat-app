import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getContacts } from "../../apis/contact";
import { IContact } from "../../interface/contact";

type ContactState = { contacts: IContact[] };
const initialState: ContactState = { contacts: [] };

interface LatestMessage{
    id: any,
    isLatest: boolean
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        storeContacts: (state, action: PayloadAction<ContactState>) => {
            state.contacts = action.payload.contacts;
        },
        getLatestMessage:(state, action: PayloadAction<LatestMessage>) => {
            state.contacts[action.payload.id].isLatest = action.payload.isLatest
        }
    }
});

export const { storeContacts, getLatestMessage } = contactSlice.actions;

export const contactSelector = (state: any) => state.rootReducer.contacts || {};

export default contactSlice.reducer;

export const fetchContact = (): any => async (dispatch: any) => {
    const response = await getContacts();
    dispatch(storeContacts({contacts: response}));
}
