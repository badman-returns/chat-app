export interface ChatLog{
   message_id: number,
   text: string,
   timestamp: string,
   type: string,
}

export interface IChats{
    id: number,
    name: string,
    picture: string,
    chatlog: ChatLog[],
}