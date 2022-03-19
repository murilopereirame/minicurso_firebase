import { useCallback, useEffect, useMemo, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import * as S from "./styles";
export interface IChatMessageProps {
  message: string;
  userId: string;
  time: Date;
  isOwner?: boolean;
  messageId?: string;
}

const ChatMessage = ({ message, userId, time, isOwner }: IChatMessageProps) => {
  const [userImage, setUserImage] = useState<string>("");

  const getUserImage = useCallback(async () => {
    const storage = getStorage();
    const pathReference = ref(storage, `users/${userId}`);

    let imageUrl = "";

    try {
      imageUrl = await getDownloadURL(pathReference);
      setUserImage(imageUrl);
    } catch {
      setUserImage(
        "https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"
      );
    }
  }, [userId]);

  useEffect(() => {
    getUserImage();
  }, [userId, getUserImage]);

  const getMessageTime = useMemo(() => {
    return `${time.getHours()}:${time.getMinutes()}`;
  }, [time]);

  return (
    <>
      <S.MessageContainer isOwner={isOwner === true}>
        <S.AvatarContainer>
          <S.UserAvatar src={userImage} />
        </S.AvatarContainer>
        <S.ContentContainer isOwner={isOwner === true}>
          <S.MessageText>{message}</S.MessageText>
          <S.MessageTime>{getMessageTime}</S.MessageTime>
        </S.ContentContainer>
      </S.MessageContainer>
    </>
  );
};

export default ChatMessage;
