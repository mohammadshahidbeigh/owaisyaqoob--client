// utils/auth.ts
import {
  auth,
  db,
  GoogleAuthProvider,
  signInWithPopup,
  doc,
  getDoc,
  setDoc,
} from "./db";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userDoc = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDoc);

    if (!userSnapshot.exists()) {
      await setDoc(userDoc, {
        name: user.displayName,
        email: user.email,
        contact: user.phoneNumber || "",
      });
    }
    return user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};
