import { combineReducers } from "@reduxjs/toolkit";
import contacts from "./slices/contacts";

const rootReducer = combineReducers({
    contacts,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
