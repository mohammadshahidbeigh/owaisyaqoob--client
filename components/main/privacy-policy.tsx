import React from "react";

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

const PrivacyPolicy: React.FC = () => {
  const currentDate = formatDate(new Date());
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>Effective date: {currentDate}</p>
      <h2 className="text-base md:text-xl font-bold mt-4">Introduction</h2>
      <p>
        This Privacy Policy explains how Lions Den Martial Arts Academy
        collects, uses, and discloses your personal information. We are
        committed to protecting your privacy and ensuring that your personal
        information is handled in a safe and responsible manner.
      </p>
      <h2 className="text-base md:text-xl font-bold mt-4">
        Information We Collect
      </h2>
      <p>
        We collect information that you provide to us directly, such as when you
        register at our office, pay through our website, or contact us for
        support. This information may include your name, email address, phone
        number, and payment details.
      </p>
      <h2 className="text-base md:text-xl font-bold mt-4">
        How We Use Your Information
      </h2>
      <p>
        We use the information we collect to provide, maintain, and improve our
        services, process transactions, and communicate with you. We may also
        use your information to send you promotional messages and updates.
      </p>
      <h2 className="text-base md:text-xl  font-bold mt-4">
        Sharing Your Information
      </h2>
      <p>
        We do not share your personal information with third parties except as
        necessary to provide our services, comply with legal obligations, or
        protect our rights.
      </p>
      <h2 className="text-base md:text-xl  font-bold mt-4">Security</h2>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access and disclosure.
      </p>
      <h2 className="text-base md:text-xl  font-bold mt-4">
        Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on our website. We encourage
        you to review this Privacy Policy periodically for any updates or
        changes.
      </p>
      <h2 className="text-base md:text-xl font-bold mt-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc ml-8">
        <li>By email: Owaisyaqoob534@gmail.com</li>
        <li>By phone: +91 97975 55443 / +91 9682347775</li>
        <li>
          By address: Near Shaheed Park, Opposite Alamdar Masjid 3rd Floor
          Dangerpora, Pulwama
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
