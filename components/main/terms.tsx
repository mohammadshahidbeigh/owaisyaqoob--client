import React from "react";
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

const Terms: React.FC = () => {
  const currentDate = formatDate(new Date());
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p>Effective date: {currentDate}</p>
      <p>
        Welcome to Lions Den Martial Arts Academy. These terms and conditions
        outline the rules and regulations for the use of our services and
        website.
      </p>
      <h2 className="text-1xl font-bold mt-4">Acceptance of Terms</h2>
      <p>
        By accessing our services or website, you accept these terms and
        conditions in full. If you disagree with any part of these terms, please
        do not use our services or website.
      </p>
      <h2 className="text-1xl font-bold mt-4">Class Conduct</h2>
      <p>
        Members are expected to adhere to the code of conduct during classes.
        This includes respecting instructors and fellow members, maintaining
        proper hygiene, and following safety guidelines.
      </p>
      <h2 className="text-1xl font-bold mt-4">Membership</h2>
      <p>
        Membership fees are due monthly and must be paid on time to continue
        accessing classes. We reserve the right to terminate memberships for
        non-payment or violation of our code of conduct.
      </p>
      <h2 className="text-1xl font-bold mt-4">Liability</h2>
      <p>
        Lions Den Martial Arts Academy is not liable for any injuries sustained
        during training. Members participate at their own risk and are
        encouraged to consult with a physician before starting any new fitness
        program.
      </p>
      <h2 className="text-1xl font-bold mt-4">Changes to Terms</h2>
      <p>
        We may update these terms and conditions from time to time. We will
        notify you of any changes by posting the new terms on our website. Your
        continued use of our services after any changes indicates your
        acceptance of the new terms.
      </p>
      <h2 className="text-1xl font-bold mt-4">Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul className="list-disc ml-8">
        <li>By email: Owaisyaqoob534@gmail.com</li>
        <li>By phone: +91 97975 55443 / +91 9682347775</li>
        <li>
          By mail: Near Shaheed Park, Opposite Alamdar Masjid 3rd Floor
          Dangerpora, Pulwama
        </li>
      </ul>
    </div>
  );
};

export default Terms;
