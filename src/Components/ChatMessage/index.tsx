export interface IChatMessageProps {
  message: string;
  userId: string;
  time: Date;
  isOwner: boolean;
  messageId: string;
}

import { useMemo } from "react";
import * as S from "./styles";

const ChatMessage = ({ message, userId, time, isOwner }: IChatMessageProps) => {
  const getUserImage = useMemo(() => {
    return "";
  }, [userId]);
  const getMessageTime = useMemo(() => {
    return `${time.getHours()}:${time.getMinutes}`;
  }, [time]);

  return (
    <>
      <S.MessageContainer isOwner={isOwner}>
        <S.AvatarContainer>
          <S.UserAvatar src={getUserImage} />
        </S.AvatarContainer>
        <S.MessageText>{message}</S.MessageText>
        <S.MessageTime>{getMessageTime}</S.MessageTime>
      </S.MessageContainer>
    </>
  );
};

export default ChatMessage;
