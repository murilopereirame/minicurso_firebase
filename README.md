# Code Talk - Introdução ao Firebase

## **Descrição**
Olá! Esse repositório foi criado para demonstrar algumas das soluções providas através do serviço da Google, o Firebase.

## **Soluções do Firebase**
- Authentication
- Cloud Firestore
- Cloud Storage
- Realtime Database
- Remote Config

## **Como Executar**
```bash
  yarn install
  yarn start
```

## **Configurações**
> Essa branch conta com a versão **incompleta** do código, abaixo estão os **snippets** de código e **onde** devem ser colocados para **integrar** as soluções do **Firebase**

- [ ] Configurar e Inicializar Firebase
  >src/index.tsx
  ```js
  import { initializeApp } from "firebase/app";
  ```
  
  > src/index.tsx - 07:0
  ```js
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };
  initializeApp(firebaseConfig);
  ```
- [ ] Codar o getUser
  > src/Utils/services.ts - 4:0  
  > **getUser**
  ```js
  import { collection, getFirestore, doc, getDoc } from "firebase/firestore";
  ```
  ```js
  const firestore = getFirestore();
  const usersRef = collection(firestore, "users");
  const userDoc = await getDoc(doc(usersRef, user.uid));

  return userDoc;
  ```
- [ ] Codar o login
  > src/Pages/Home/index.tsx
  ```js
  import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
  import { getUser } from "../../Utils/services";
  ```

  > src/Pages/Home/index.tsx - 20:3  
  > **doLogin**
  ```js
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.useDeviceLanguage();

  try {
    const result = await signInWithPopup(auth, provider);
    const userDoc = await getUser(result.user);

    if (!userDoc.exists) {
      alert("Erro ao efetuar login");
    } else {
      setUserId(result.user.uid);
      setShowMessageBox(true);

      const userData = userDoc.data();

      if (!userData?.complete) {
        setShowProfile(true);
      }
    }
  } catch (err) {
    return;
  }
  ```
- [ ] Codar o listener do chat
  > src/Pages/Home/index.tsx
  ```js
  import { ref, getDatabase, onValue, off } from "firebase/database";
  ```

  > src/Pages/Home/index.tsx - 18:3  
  > **useEffect**
  ```js
  const db = getDatabase();

  const onValueChange = onValue(ref(db, `/chat`), (snapshot) => {
    const snapVal = snapshot.val();

    setMessages(
      Object.keys(snapVal).map(function (key, index) {
        return {
          message: snapVal[key].message,
          time: new Date(snapVal[key].time),
          userId: snapVal[key].userId,
          messageId: key,
        } as IChatMessageProps;
      })
    );
  });

  return () => off(ref(db, `/chat`), "value", onValueChange);
  ```
- [ ] Codar o Profile (Storage e Firestore)
  > src/Components/Profile/index.tsx

  ```js
  import { ref, getStorage, uploadBytes } from "firebase/storage";
  import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
  ```

  > src/Components/Profile/index.tsx - 28:3  
  > **handleSubmit**

  ```js
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
  ```
- [ ] Codar as Regras
  > src/Components/Rules/index.tsx 
  ```js
  import {
    getRemoteConfig,
    getString,
    fetchAndActivate,
  } from "firebase/remote-config";
  ```

  > src/Components/Rules/index.tsx - 18:3  
  > **loadRules**
  ```js
  const remoteConfig = getRemoteConfig();
  await fetchAndActivate(remoteConfig);
  const remoteRules = getString(remoteConfig, "rules");

  setRules({ __html: remoteRules });
  ```
- [ ] Codar o Envio de Mensagens
  > src/Components/Chat/index.tsx
  ```js
  import { update, child, push, getDatabase, ref } from "firebase/database";
  ```
  > src/Components/Chat/index.tsx - 15:3  
  > **sendMessage**
  ```js
  if (message === "") return;

  const db = getDatabase();
  const chatMessage: IChatMessageProps = {
    message,
    userId,
    time: new Date(),
  };
  const newPostKey = push(child(ref(db), "chat")).key;
  const updates: any = {};
  updates["/chat/" + newPostKey] = chatMessage;

  update(ref(db), updates);

  return setMessage("");
  ```
- [ ] Codar o Avatar
  > src/Components/ChatMessage/index.tsx
  ```js
  import { getStorage, ref, getDownloadURL } from "firebase/storage";
  ```
  > src/Components/ChatMessage/index.tsx - 15:3  
  > **getUserImage**
  ```js
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
  ``` 
## **Considerações Finais**
Obrigado por chegar até aqui!  
Sinta-se a vontade para melhorar o projeto e abrir um PR =)