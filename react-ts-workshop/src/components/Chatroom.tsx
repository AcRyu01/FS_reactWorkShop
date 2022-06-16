import React, { useCallback } from 'react'
import { useEffect, useState } from 'react'
import { io, Socket } from "socket.io-client";
import { MessageData } from '../models/message.model';
import { ClientToServerEvents, ServerToClientEvents } from '../models/socketIO.model';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import { useLocation, Navigate } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-rows: 80vh 1fr;
`
const StyledUl = styled.ul`
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
  font-size: large;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
`


function Chatroom(): JSX.Element {
    const dummy = [
        { text: "Hi", member: "FutureSkill" },
        { text: "Hi", member: "Mark" },
        { text: "Good Bye", member: "FutureSkill" },
        { text: "Bye", member: "Mark" }
    ]
    const [messages, setMessages] = useState(dummy);
    const [socket, setSocket] = useState<Socket | null>(null);

    const addMessage = useCallback((message: MessageData) => {
        setMessages([...messages, message]);
    }, [messages])

    const onMessageSend = (message: MessageData) => {
        addMessage(message);
        socket?.emit("emit", { ...message })
    }

    const location = useLocation()
    const text: string = location.state as string

    useEffect(() => {
        if (socket === null) {
            const socket: Socket<ServerToClientEvents, ClientToServerEvents>
                = io("http://localhost:8080");
            socket.on("message", (m) => addMessage(m))
            setSocket(socket);
        } else {
            socket?.on("message", (m) => addMessage(m))
        }
    }, [addMessage, messages, socket]);


    if (text === null) {
        return <Navigate to="/" />
    }
    return (
        <Container>
            <StyledUl>
                <MessageList messages={messages} currentMember={text} />
            </StyledUl>
            <MessageForm onMessageSend={onMessageSend} currentMember={text} />
        </Container>
    )
}

export default Chatroom

