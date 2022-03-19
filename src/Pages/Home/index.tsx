import { useCallback, useEffect, useState } from "react";
import { getRemoteConfig } from "firebase/remote-config";
import Chat from "../../Components/Chat";
import * as S from "./styles";
import { IChatMessageProps } from "../../Components/ChatMessage";
import Profile from "../../Components/Profile";
import Rules from "../../Components/Rules";

const Home = () => {
  const [showMessageBox, setShowMessageBox] = useState<boolean>(true);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [messages, setMessages] = useState<IChatMessageProps[]>([
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: true,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: true,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: true,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: true,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: true,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: true,
      messageId: "jjjjj",
    },
    {
      message: "Olá a todos e a todas!",
      userId: "kkkkkk",
      time: new Date(),
      isOwner: false,
      messageId: "jjjjj",
    },
  ]);

  const remoteConfig = getRemoteConfig();

  const doLogin = useCallback(() => {}, []);
  const openRules = useCallback(() => {}, []);

  return (
    <>
      <Profile userId={userId} show={showProfile} />
      <Rules show={showRules} />
      <S.HomeContainer>
        <S.TitleText>CODE TALK</S.TitleText>
        <Chat messages={messages} showMessageBox={showMessageBox} />
        <S.ButtonsContainer>
          <S.Button onClick={doLogin}>ENTRAR</S.Button>
          <S.Button onClick={openRules}>REGRAS</S.Button>
        </S.ButtonsContainer>
      </S.HomeContainer>
    </>
  );
};

export default Home;
