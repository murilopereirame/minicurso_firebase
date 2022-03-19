import { useState } from "react";
import * as S from "./styles";

interface IProfileProps {
  userId: string;
  show: boolean;
}

const Profile = ({ userId, show }: IProfileProps) => {
  const [name, setName] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>(
    "https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"
  );

  return (
    <>
      {show && (
        <S.ProfileBackground>
          <S.ProfileContainer>
            <S.UserImage src={profileImage} />
            <S.UserName
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
            <S.SaveButton>SALVAR</S.SaveButton>
          </S.ProfileContainer>
        </S.ProfileBackground>
      )}
    </>
  );
};

export default Profile;
