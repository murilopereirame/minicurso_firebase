import ChatMessage, { IChatMessageProps } from "../ChatMessage";
import * as S from "./styles";

interface IChatProps {
  messages: IChatMessageProps[];
  showMessageBox: boolean;
}

const Chat = ({ messages, showMessageBox }: IChatProps) => {
  return (
    <>
      <S.ChatContainer>
        <S.MessagesContainer>
          {messages.map((item) => {
            return <ChatMessage {...item} key={item.messageId} />;
          })}
        </S.MessagesContainer>
        {showMessageBox && (
          <S.InputContainer>
            <S.MessageBox></S.MessageBox>
            <S.SendButton>
              <i className="material-icons">send</i>
            </S.SendButton>
          </S.InputContainer>
        )}
      </S.ChatContainer>
    </>
  );
};

export default Chat;
