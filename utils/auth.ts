// // utils/auth.ts
// import {
//   auth,
//   db,
//   GoogleAuthProvider,
//   signInWithPopup,
//   doc,
//   getDoc,
//   setDoc,
// } from "./db";
// import { sendPasswordResetEmail } from "firebase/auth";

// export const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     const userDoc = doc(db, "users", user.uid);
//     const userSnapshot = await getDoc(userDoc);

//     if (!userSnapshot.exists()) {
//       // User does not exist, throw an error with a specific code
//       const error: Error & { code?: string } = new Error("User not registered");
//       error.code = "UserNotRegistered";
//       throw error;
//     }

//     // If the user exists, return the user
//     return user;
//   } catch (error) {
//     console.error("Google sign-in error:", error);
//     throw error;
//   }
// };

// export const resetPassword = async (email: string) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//   } catch (error) {
//     console.error("Password reset error:", error);
//     throw error;
//   }
// };
