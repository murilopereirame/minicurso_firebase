import { useCallback, useEffect, useState } from "react";
import { update, child, push, getDatabase, ref } from "firebase/database";
import ChatMessage, { IChatMessageProps } from "../ChatMessage";
import * as S from "./styles";

interface IChatProps {
  messages: IChatMessageProps[];
  showMessageBox: boolean;
  userId: string;
}

const Chat = ({ messages, showMessageBox, userId }: IChatProps) => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = useCallback(() => {
    if (message === "") return;

    const db = getDatabase();
    const chatMessage: IChatMessageProps = {
      message,
      userId,
      time: new Date(),
    };
    const newPostKey = push(child(ref(db), "chat")).key;
    const updates: any = {};
    updates["/chat/" + newPostKey] = chatMessage;

    update(ref(db), updates);

    return setMessage("");
  }, [message, userId]);

  return (
    <>
      <S.ChatContainer>
        <S.MessagesContainer>
          {messages.map((item) => {
            return (
              <ChatMessage
                {...item}
                isOwner={item.userId === userId}
                key={item.messageId}
              />
            );
          })}
        </S.MessagesContainer>
        {showMessageBox && (
          <S.InputContainer>
            <S.MessageBox
              value={message}
              onChange={(evt) => {
                setMessage(evt.target.value);
              }}
            />
            <S.SendButton onClick={sendMessage}>
              <i className="material-icons">send</i>
            </S.SendButton>
          </S.InputContainer>
        )}
      </S.ChatContainer>
    </>
  );
};

export default Chat;
