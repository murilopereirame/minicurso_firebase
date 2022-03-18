import { useCallback, useEffect, useState } from "react";
import { getRemoteConfig } from "firebase/remote-config";
import Chat from "../../Components/Chat";
import * as S from "./styles";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const remoteConfig = getRemoteConfig();

  const doLogin = useCallback(() => {}, []);
  const openRules = useCallback(() => {}, []);

  return (
    <S.HomeContainer>
      <S.TitleText>CODE TALK</S.TitleText>
      <Chat messages={messages} showMessageBox={showMessageBox} />
      <S.Button onClick={doLogin}>ENTRAR</S.Button>
      <S.Button onClick={openRules}>REGRAS</S.Button>
    </S.HomeContainer>
  );
};

export default Home;
