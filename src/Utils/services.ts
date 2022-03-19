import { User } from "firebase/auth";
import { collection, getFirestore, doc, getDoc } from "firebase/firestore";

export const getUser = async (user: User) => {
  const firestore = getFirestore();
  const usersRef = collection(firestore, "users");
  const userDoc = await getDoc(doc(usersRef, user.uid));

  return userDoc;
};
