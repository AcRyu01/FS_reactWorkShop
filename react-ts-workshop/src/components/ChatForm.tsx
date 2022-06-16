import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`
const Input = styled.input`
    width: 80%;
    font-size: large;
    border-radius: 10px;
    border: 3px solid #287fcb;
    padding: 5px 10px;
    margin: 10px;
    &:focus{
        outline: none;
        border: 3px solid #5ba394;
    }
`
const StyledLink = styled(Link)`
  color: wheat;
  font-weight: bold;
  text-decoration:none;
  cursor: pointer;
  margin-top:15px;
  padding: 5px 10px;
  background-color: #287fcb;
  border-radius:10px;
  &:hover{
        background: #5ba394;
        font-weight:900;
        padding: 0.7rem 1.3rem;
    }
`

function ChatForm(): JSX.Element {
    const [username, setusername] = useState("");
    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setusername(e.target.value)
    }

    return (
        <FormWrapper>
            <Input type="text" name="username" value={username} onChange={onChange} />
            <StyledLink to="/chatroom" state={username}>Join</StyledLink>
        </FormWrapper>
    )
}

export default ChatForm