import React from "react";
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

const ReturnPolicy: React.FC = () => {
  const currentDate = formatDate(new Date());
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Return and Refund Policy</h1>
      <p>Effective date: {currentDate}</p>
      <p>
        Thank you for joining Lions Den Martial Arts Academy. If you are not
        entirely satisfied with our services or products, we&apos;re here to
        help.
      </p>
      <h2 className="text-1xl font-bold mt-4">Membership Fees</h2>
      <p>
        Membership fees are non-refundable except in the case of a documented
        medical condition that prevents participation. Refund requests must be
        submitted in writing and will be evaluated on a case-by-case basis.
      </p>
      <h2 className="text-1xl font-bold mt-4">Class Bookings</h2>
      <p>
        We offer refunds for class bookings if the cancellation is made at least
        24 hours before the scheduled class. Late cancellations or no-shows are
        non-refundable.
      </p>
      {/* <h2 className="text-1xl font-bold mt-4">Merchandise</h2>
      <p>
        Physical merchandise can be returned within 30 calendar days from the
        date of purchase. To be eligible for a return, the item must be unused
        and in the same condition that you received it. The item must be in the
        original packaging.
      </p>
      <h2 className="text-1xl font-bold mt-4">Refunds</h2>
      <p>
        Once we receive your returned item, we will inspect it and notify you on
        the status of your refund. If your return is approved, we will initiate
        a refund to your original method of payment. You will receive the credit
        within a certain number of days, depending on your card issuer&apos;s
        policies.
      </p> */}
      <h2 className="text-1xl font-bold mt-4">Contact Us</h2>
      <p>
        If you have any questions about our Returns and Refunds Policy, please
        contact us:
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

export default ReturnPolicy;
