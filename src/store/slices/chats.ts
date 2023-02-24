import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getChatById } from "../../apis/chat";
import { IChats } from "../../interface/chat";

type ChatState = { chats: IChats };
const initialState: ChatState = { chats: { id: 0, name: "", picture: "", chatlog: [] } };

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        storeChats: (state, actions: PayloadAction<ChatState>) => {
            state.chats = actions.payload.chats;
        }
    }
})

export const { storeChats } = chatSlice.actions;

export const chatSelector = (state: any) => state.rootReducer.chats;

export default chatSlice.reducer;

export const fetchChat = (id: number): any => async (dispatch: any) => {
    const response = await getChatById(id);
    dispatch(storeChats({ chats: response }));
}