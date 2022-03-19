import styled from "styled-components";

export const ChatContainer = styled.div`
  height: 70%;
  max-height: 70%;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.25rem;
  max-width: 768px;
`;
export const MessagesContainer = styled.div`
  background-color: rgba(117, 120, 126, 0.7);
  flex: 1;
  padding-bottom: 0.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: rgba(117, 120, 126, 0.7);
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: rgba(117, 120, 126, 0.7);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #127369;
  }
`;
export const InputContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;
export const MessageBox = styled.textarea`
  background-color: rgba(117, 120, 126, 0.7);
  flex: 1;
  border: none;
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
`;
export const SendButton = styled.button`
  margin-left: 0.5rem;
  background-color: #127369;
  color: #001113;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  cursor: pointer;
`;
