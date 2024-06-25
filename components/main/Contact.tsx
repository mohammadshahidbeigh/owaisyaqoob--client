"use client";

import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | "idle">("idle");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      toast.error(
        "Missing email configuration. Please check your environment variables.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }

    if (formRef.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, formRef.current, userID);
        setStatus("success");
        formRef.current.reset();
        toast.success("Your message has been sent successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        setStatus("error");
        toast.error("An error occurred. Please try again later.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        ref={formRef}
        className="contact flex flex-col md:flex-row items-center m-auto px-5 py-20"
        onSubmit={sendEmail}
      >
        <ContactDetails />
        <ContactForm status={status} />
      </form>
    </>
  );
};

const ContactDetails = () => (
  <div
    className="textContainer flex flex-col gap-4 flex-1 md:mr-8"
    id="contact"
  >
    <h1 className="text-3xl md:text-6xl mb-4 ml-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      Contact Us
    </h1>
    <ContactDetailItem label="Email" value="Owaisyaqoob534@gmail.com" />
    <ContactDetailItem
      label="Address"
      value="Near Shaheed Park, Opposite Alamdar Masjid 3rd Floor Dangerpora, Pulwama."
      link="https://www.google.com/maps/place/LION'S+DEN+MARTIAL+ARTS+ACADEMY/@33.8717102,74.9006797,17z/data=!3m1!4b1!4m6!3m5!1s0x38e1f5a4453b6b81:0x7c37fc9584632030!8m2!3d33.8717102!4d74.9032546!16s%2Fg%2F11n5bqgvqx?entry=ttu"
    />
    <ContactDetailItem
      label="Phone-Whatsapp"
      value={[
        { number: "+91 97975 55443", link: "https://wa.me/919797555443" },
        { number: "+91 96823 47775", link: "https://wa.me/919682347775" },
      ]}
    />
  </div>
);

interface ContactDetailItemProps {
  label: string;
  value: string | { number: string; link: string }[];
  link?: string;
}

const ContactDetailItem: React.FC<ContactDetailItemProps> = ({
  label,
  value,
  link,
}) => (
  <div className="item font-bold text-white text-lg md:text-xl ml-3">
    <h2>{label}:</h2>
    {Array.isArray(value) ? (
      value.map((val, index) => (
        <a
          key={index}
          href={val.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base text-white"
        >
          {val.number}
        </a>
      ))
    ) : link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm md:text-base text-white"
      >
        {value}
      </a>
    ) : (
      <span className="text-sm md:text-base text-white">{value}</span>
    )}
  </div>
);

interface ContactFormProps {
  status: "success" | "error" | "idle";
}

const ContactForm: React.FC<ContactFormProps> = ({ status }) => (
  <div className="formContainer flex-1 ml-2 mr-2 mt-12">
    <div className="space-y-4">
      <input
        type="text"
        required
        placeholder="Name"
        name="name"
        className="w-full p-2 border-b border-white bg-transparent text-white rounded"
      />
      <input
        type="email"
        required
        placeholder="Email"
        name="email"
        className="w-full p-2 border-b border-white bg-transparent text-white rounded"
      />
      <textarea
        rows={8}
        required
        placeholder="Message"
        name="message"
        className="w-full p-2 border-b border-white bg-transparent text-white rounded"
      />
      <button
        type="submit"
        className="w-full p-3 bg-purple-500 text-white font-bold rounded cursor-pointer ext-white hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg w-full dark:focus:ring-purple-400/55 mt-4"
      >
        Submit
      </button>
      {status === "error" && (
        <div className="flex items-center text-red-500">
          An error occurred. Please try again later.
        </div>
      )}
      {status === "success" && (
        <div className="flex items-center text-green-500">
          Your message has been sent successfully!
        </div>
      )}
    </div>
  </div>
);

export default Contact;
