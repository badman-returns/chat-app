import { IContact } from "../interface/contact";
import store from "../store/store";
import { getLatestMessage } from "../store/slices/contacts";

export function getLatestMessageById(id: number) {
    store.dispatch(getLatestMessage({id, isLatest: true}));
}