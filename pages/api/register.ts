// import { NextApiRequest, NextApiResponse } from "next";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   fetchSignInMethodsForEmail,
// } from "firebase/auth";
// import { auth, db } from "../../utils/db";
// import { doc, setDoc } from "firebase/firestore";
// import nodemailer from "nodemailer";

// // Configure nodemailer
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// async function sendUserEmail(email: string, name: string, program: string) {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Thank you for your registration",
//     text: `Dear ${name},\n\nThank you for registering for the ${program} Program.\n\nBest regards,\nLions Den Martial Arts Academy`,
//   };

//   await transporter.sendMail(mailOptions);
// }

// async function sendAdminEmail(
//   name: string,
//   email: string,
//   contact: string,
//   program: string
// ) {
//   const adminEmail = process.env.ADMIN_EMAIL;
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: adminEmail,
//     subject: "New member registration",
//     text: `A new member has registered for the ${program} Program.\n\nName: ${name}\nEmail: ${email}\nContact: ${contact}`,
//   };

//   await transporter.sendMail(mailOptions);
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { name, email, password, contact, program } = req.body;

//     // Validate required fields
//     if (!name || !email || !password || !contact || !program) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     try {
//       // Check if email already exists
//       const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//       if (signInMethods.length > 0) {
//         return res
//           .status(400)
//           .json({ message: "User already exists, please sign in." });
//       }

//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       if (userCredential.user) {
//         await updateProfile(userCredential.user, { displayName: name });
//         await setDoc(doc(db, "users", userCredential.user.uid), {
//           name,
//           email,
//           contact,
//           program,
//         });

//         // Send emails
//         await sendUserEmail(email, name, program);
//         await sendAdminEmail(name, email, contact, program);
//       }
//       res.status(201).json({ message: "User registered successfully" });
//     } catch (error: any) {
//       console.error("Registration error:", error);
//       if (error.code === "auth/email-already-in-use") {
//         return res
//           .status(400)
//           .json({ message: "User already exists, please sign in." });
//       }
//       res.status(500).json({ message: "Internal Server Error", error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
