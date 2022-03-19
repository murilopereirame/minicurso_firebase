import { useMemo } from "react";
import * as S from "./styles";
export interface IChatMessageProps {
  message: string;
  userId: string;
  time: Date;
  isOwner: boolean;
  messageId: string;
}

const ChatMessage = ({ message, userId, time, isOwner }: IChatMessageProps) => {
  const getUserImage = useMemo(() => {
    return "https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146";
  }, [userId]);
  const getMessageTime = useMemo(() => {
    return `${time.getHours()}:${time.getMinutes()}`;
  }, [time]);

  return (
    <>
      <S.MessageContainer isOwner={isOwner}>
        <S.AvatarContainer>
          <S.UserAvatar src={getUserImage} />
        </S.AvatarContainer>
        <S.ContentContainer isOwner={isOwner}>
          <S.MessageText>{message}</S.MessageText>
          <S.MessageTime>{getMessageTime}</S.MessageTime>
        </S.ContentContainer>
      </S.MessageContainer>
    </>
  );
};

export default ChatMessage;
