// pages/api/create-order.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "rzp_live_vdK7EWhohq7pdQ",
  key_secret: "CIi0yid8F82wa25IMgBFEMa2",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Received request:", req.method, req.body);

  if (req.method === "POST") {
    const { amount } = req.body;

    if (!amount) {
      console.error("Amount is missing");
      return res.status(400).json({ error: "Amount is required" });
    }

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
    };

    try {
      const order = await razorpay.orders.create(options);
      console.log("Order created successfully:", order);
      res.status(200).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
