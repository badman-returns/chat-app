import { Fragment } from "react";
import ChatBody from "./ChatBody/ChatBody";
import ChatFooter from "./ChatFooter/ChatFooter";
import ChatHeader from "./ChatHeader/ChatHeader";

export default function BaseChatComponent(){
    return (
        <Fragment>
            <ChatHeader/>
            <ChatBody/>
            <ChatFooter/>
        </Fragment>
    )
}