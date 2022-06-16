import React from 'react'
import { MessageData } from '../models/message.model'
import styled from 'styled-components';

interface StyledProps {
    me?: boolean;
}

const MessageBox = styled.li<StyledProps>`
    display: flex;
    justify-content: ${prop => prop.me ? "flex-end" : "flex-start"};
`

const MessageContent = styled.div`
    background-color: #DFF6FF;
    margin: 0.5rem 0;
    padding: 5px;
    border-radius:10px;
    display: flex;
    gap: 5px;
`
const Username = styled.h4`
    padding: 0;
    margin: 0;
    font-weight: 700;
    color: #6A67CE;
    margin-left:5px;
`
const Text = styled.h4`
    color: #112B3C;
    padding: 0;
    margin: 0;
    font-weight: 400;
    margin-right:5px;
`

type Props = {
    message: MessageData;
    currentMember: string;
}

function Message({ message, currentMember }: Props): JSX.Element {
    return (
        <MessageBox me={message.member === currentMember}>
            <MessageContent >
                <Username >{message.member}:</Username>
                <Text >{message.text}</Text>
            </MessageContent>
        </MessageBox>
    )
}

export default Message