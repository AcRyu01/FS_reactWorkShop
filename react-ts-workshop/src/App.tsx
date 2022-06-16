import React from 'react'
import Chatroom from './components/Chatroom'
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";
import ChatForm from './components/ChatForm';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  text-align: center;
  min-height: 90vh;
  min-width: 90vw;
  margin: 5vh 5vw;
  padding: 2rem 2rem;
  border-radius: 20px;
  font-weight: 400;
  font-size: clamp(16px, 28px, 42px);
  background: #faedc6;
  color: black;
`

export default function App(): JSX.Element {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<ChatForm />} />
          <Route path="/chatroom" element={<Chatroom />} />
        </Routes>
      </Router>
    </Container>
  )
}
