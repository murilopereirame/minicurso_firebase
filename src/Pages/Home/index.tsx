import { useCallback, useState } from "react";
import Chat from "../../Components/Chat";
import * as S from "./styles";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const doLogin = useCallback(() => {}, []);
  const openRules = useCallback(() => {}, []);

  <S.HomeContainer>
    <S.TitleText>CODE TALK</S.TitleText>
    <Chat messages={messages} showMessageBox={showMessageBox} />
    <S.Button onClick={() => {}}>ENTRAR</S.Button>
    <S.Button onClick={() => {}}>REGRAS</S.Button>
  </S.HomeContainer>;
};

export default Home;
