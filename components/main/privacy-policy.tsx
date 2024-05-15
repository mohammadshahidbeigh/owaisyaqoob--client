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
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>Effective date: {currentDate}</p>
      <p>
        We at Martial Arts Club Academy (&quot;we&quot;, &quot;our&quot;,
        &quot;us&quot;) respect your privacy and are committed to protecting it
        through our compliance with this policy.
      </p>
      <h2 className="text-1xl font-bold mt-4">Information We Collect</h2>
      <p>
        We collect several types of information from and about users of our
        Website and members of our academy, including:
      </p>
      <ul className="list-disc ml-8">
        <li>
          Personal identification information (Name, email address, phone
          number, etc.)
        </li>
        <li>Medical and emergency contact information</li>
        <li>Usage data (how you use our services)</li>
      </ul>
      <h2 className="text-1xl font-bold mt-4">How We Use Your Information</h2>
      <p>We use the information we collect in the following ways:</p>
      <ul className="list-disc ml-8">
        <li>
          To provide and maintain our services, including scheduling classes and
          training sessions
        </li>
        <li>To notify you about changes to our services</li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so that we can improve our
          services
        </li>
        <li>To ensure the safety and security of our members</li>
      </ul>
      <h2 className="text-1xl font-bold mt-4">Sharing Your Information</h2>
      <p>
        We do not share your personal information with third parties except to
        comply with the law, protect our rights, or as part of an agreement with
        service providers who help us run our operations.
      </p>
      <h2 className="text-1xl font-bold mt-4">Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal
        information. You can do this by contacting us directly.
      </p>
      <h2 className="text-1xl font-bold mt-4">Contact Us</h2>
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
