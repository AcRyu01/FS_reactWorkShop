import React from 'react'
import { MessageData } from '../models/message.model'
import Message from './Message'

type Props = {
    messages: MessageData[];
    currentMember: string;
}

function MessageList({ messages, currentMember }: Props): JSX.Element {
    return (
        <>
            {messages.map((message, idx: number) => (
                <Message message={message} key={idx} currentMember={currentMember} />
            ))}
        </>
    )
}

export default MessageList