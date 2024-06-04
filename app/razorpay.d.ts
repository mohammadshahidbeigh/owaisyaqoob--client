// razorpay.d.ts
declare module "razorpay" {
  interface RazorpayOptions {
    key_id: string;
    key_secret: string;
  }

  interface Order {
    id: string;
    amount: number;
    currency: string;
  }

  interface OrderOptions {
    amount: number;
    currency: string;
  }

  class Razorpay {
    constructor(options: RazorpayOptions);
    orders: {
      create(options: OrderOptions): Promise<Order>;
    };
  }

  export default Razorpay;
}
