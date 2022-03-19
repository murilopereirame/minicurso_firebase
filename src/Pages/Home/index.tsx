import { useCallback, useEffect, useState } from "react";
import { ref, getDatabase, onValue, off } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import Chat from "../../Components/Chat";
import * as S from "./styles";
import { IChatMessageProps } from "../../Components/ChatMessage";
import Profile from "../../Components/Profile";
import Rules from "../../Components/Rules";
import { getUser } from "../../Utils/services";

const Home = () => {
  const [showMessageBox, setShowMessageBox] = useState<boolean>(false);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [messages, setMessages] = useState<IChatMessageProps[]>([]);

  useEffect(() => {}, []);

  const doLogin = useCallback(async () => {}, []);

  return (
    <>
      <Profile
        onClose={() => {
          setShowProfile(false);
        }}
        userId={userId}
        show={showProfile}
      />
      <Rules
        onClose={() => {
          setShowRules(false);
        }}
        show={showRules}
      />
      <S.HomeContainer>
        <S.TitleText>CODE TALK</S.TitleText>
        <Chat
          userId={userId}
          messages={messages}
          showMessageBox={showMessageBox}
        />
        <S.ButtonsContainer>
          {!showMessageBox && <S.Button onClick={doLogin}>ENTRAR</S.Button>}
          <S.Button
            onClick={() => {
              setShowRules(true);
            }}
          >
            REGRAS
          </S.Button>
        </S.ButtonsContainer>
      </S.HomeContainer>
    </>
  );
};

export default Home;
