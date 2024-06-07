import { NextApiRequest, NextApiResponse } from "next";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth, db } from "../../utils/db";
import { doc, setDoc } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, password, contact } = req.body;

    try {
      // Check if email already exists
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        return res
          .status(400)
          .json({ message: "User already exists, please sign in." });
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: name });
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name,
          email,
          contact,
        });
      }
      res.status(201).json({ message: "User registered successfully" });
    } catch (error: any) {
      console.error("Registration error:", error);
      if (error.code === "auth/email-already-in-use") {
        return res
          .status(400)
          .json({ message: "User already exists, please sign in." });
      }
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
