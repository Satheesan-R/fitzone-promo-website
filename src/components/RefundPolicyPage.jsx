import "./PolicyPage.css";

const RefundPolicyPage = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  return (
    <main className={`policy-page ${mode}`}>
      <div className="container policy-container">
        <p className="policy-breadcrumb">Policy Documents</p>
        <h1>Refund Policy</h1>
        <p className="policy-updated">Last updated: April 6, 2026</p>

        <section className="policy-section">
          <h2>Overview</h2>
          <p>
            Thank you for shopping at FITNESS SPORTS CENTER. We value your
            satisfaction and aim to provide the best possible online experience.
          </p>
          <p>
            If you are not completely satisfied with your purchase, we are here
            to help.
          </p>
        </section>

        <section className="policy-section">
          <h2>Returns</h2>
          <p>
            We accept return or cancellation requests within 7 days from the
            date of purchase for eligible products and services.
          </p>
        </section>

        <section className="policy-section">
          <h2>Refunds</h2>
          <p>
            After we receive and review your request, we will notify you of the
            refund status.
          </p>
          <p>
            Approved refunds are returned to the original payment method, minus
            non-refundable fees where applicable.
          </p>
        </section>

        <section className="policy-section">
          <h2>Exchanges</h2>
          <p>
            If you need to exchange your purchase for a different option,
            contact our support team within 7 days of receiving your order.
          </p>
        </section>

        <section className="policy-section">
          <h2>Non-Returnable Items</h2>
          <ul>
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Personalized or custom-made items</li>
            <li>Perishable goods</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Damaged or Defective Items</h2>
          <p>
            If your item arrives damaged or defective, contact us immediately.
            We will arrange a replacement or refund as appropriate.
          </p>
        </section>

        <section className="policy-section">
          <h2>Return Shipping</h2>
          <p>
            You are responsible for return shipping costs unless the return is
            due to our error.
          </p>
        </section>

        <section className="policy-section">
          <h2>Processing Time</h2>
          <p>
            Refunds and exchanges are typically processed within 5 business days
            after we receive the returned item.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Refund Policy, contact our customer
            support team using the contact details on our website.
          </p>
        </section>
      </div>
    </main>
  );
};

export default RefundPolicyPage;
