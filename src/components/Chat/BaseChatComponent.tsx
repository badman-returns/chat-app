import { Fragment } from "react";
import { useSelector } from "react-redux";
import { IChats } from "../../interface/chat";
import { chatSelector } from "../../store/slices/chats";
import EmptyScreen from "../EmptyScreen/EmptyScreen";
import ChatBody from "./ChatBody/ChatBody";
import ChatFooter from "./ChatFooter/ChatFooter";
import ChatHeader from "./ChatHeader/ChatHeader";

export default function BaseChatComponent() {
    const { chats } = useSelector(chatSelector);
    const { id, name, picture, chatlog }: IChats = chats;

    return (
        <Fragment>
            {id !== 0 ? (
                <Fragment>
                    <ChatHeader name={name} picture={picture} />
                    <ChatBody id={id} chatlog={chatlog} />
                    <ChatFooter />
                </Fragment>
            ): <EmptyScreen/>}
        </Fragment>
    )
}