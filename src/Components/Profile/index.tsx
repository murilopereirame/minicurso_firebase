import { useCallback, useRef, useState } from "react";
import { ref, getStorage, uploadBytes } from "firebase/storage";
import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
import * as S from "./styles";

interface IProfileProps {
  show: boolean;
  userId: string;
  onClose: () => void;
}

const Profile = ({ show, userId, onClose }: IProfileProps) => {
  const [name, setName] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>(
    "https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"
  );
  const [imageFile, setImageFile] = useState<Blob>();

  const inputFile = useRef<HTMLInputElement>(null);

  const handlePickImage = useCallback((evt) => {
    if (evt.target.files.length < 1) return;
    let blobUrl = window.URL.createObjectURL(evt.target.files[0]);
    setProfileImage(blobUrl);
    setImageFile(evt.target.files[0]);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (name === "") return alert("Preencha o nome");

    let isComplete = false;

    if (imageFile !== undefined) {
      const storage = getStorage();
      const imageRef = ref(storage, `users/${userId}`);
      await uploadBytes(imageRef, imageFile);
      isComplete = true;
    }

    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");

    await setDoc(doc(usersRef, userId), {
      name,
      complete: isComplete,
    });

    return onClose();
  }, [name, profileImage, onClose]);

  return (
    <>
      {show && (
        <S.ProfileBackground>
          <S.ProfileContainer>
            <S.UserImage
              onClick={() => {
                inputFile.current?.click();
              }}
              src={profileImage}
            />
            <S.UserName
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
            <S.SaveButton onClick={handleSubmit}>SALVAR</S.SaveButton>
            <input
              type="file"
              accept="image/jpeg,image/png,video/mp4,video/x-m4v"
              id="file"
              ref={inputFile}
              onChange={handlePickImage}
              style={{ display: "none" }}
            />
          </S.ProfileContainer>
        </S.ProfileBackground>
      )}
    </>
  );
};

export default Profile;
