// // pages/api/login.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../utils/db";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const token = await userCredential.user.getIdToken();
//       res.status(200).json({ message: "Login successful", token });
//     } catch (error) {
//       console.error("Login error:", error);
//       res.status(401).json({ message: "Invalid email or password", error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
