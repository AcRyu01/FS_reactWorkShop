import React, { useState } from 'react'
import { MessageData } from '../models/message.model';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items:center;
`
const Input = styled.input`
    width: 70%;
    font-size: large;
    border-radius: 10px;
    border: 3px solid #287fcb;
    padding: 5px 10px;
    margin: 10px;
    &:focus{
        outline: none;
        border: 3px solid #6A67CE;
    }
`
const Button = styled.button`
    font-size: large;
    padding: 0.5rem 1rem;
    background: #287fcb;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    &:hover{
        background: #6A67CE;
        font-weight:900;
        padding: 0.7rem 1.3rem;
    }
`;

type Props = {
    onMessageSend: (message: MessageData) => void;
    currentMember: string
}

function MessageForm({ onMessageSend, currentMember }: Props): JSX.Element {
    const [text, settext] = useState("");

    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        settext(e.target.value);
    }
    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onMessageSend({ text: text, member: currentMember })
        settext("");
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <Input type="text" name="text" value={text} onChange={onChange} />
            <Button>Send</Button>
        </StyledForm>
    )
}

export default MessageForm