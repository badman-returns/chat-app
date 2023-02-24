import { combineReducers } from "@reduxjs/toolkit";
import contacts from "./slices/contacts";
import chats from "./slices/chats";

const rootReducer = combineReducers({
    contacts,
    chats,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
