import "./PolicyPage.css";

const TermsConditionsPage = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  return (
    <main className={`policy-page ${mode}`}>
      <div className="container policy-container">
        <p className="policy-breadcrumb">Policy Documents</p>
        <h1>Terms & Conditions</h1>
        <p className="policy-updated">Last updated: April 6, 2026</p>

        <section className="policy-section">
          <h2>Welcome</h2>
          <p>
            Welcome to FITNESS SPORTS CENTER. These Terms and Conditions govern
            your use of our website and the purchase and sale of products and
            services from our platform.
          </p>
          <p>
            By accessing and using our website, you agree to comply with these
            terms.
          </p>
        </section>

        <section className="policy-section">
          <h2>Use of the Website</h2>
          <ul>
            <li>You must be at least 18 years old to use our website or make purchases.</li>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
            <li>You agree to provide accurate and current information during checkout.</li>
            <li>You may not use our website for unlawful or unauthorized purposes.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Product Information and Pricing</h2>
          <ul>
            <li>We strive to provide accurate product descriptions, images, and pricing information.</li>
            <li>Prices are subject to change without notice.</li>
            <li>Promotions and discounts may be limited by additional terms.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Orders and Payments</h2>
          <ul>
            <li>By placing an order, you are making an offer to purchase selected products or services.</li>
            <li>We reserve the right to refuse or cancel any order for valid operational reasons.</li>
            <li>You agree to provide valid payment information for all purchases.</li>
            <li>Payment processing is handled securely by trusted third-party processors.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Shipping and Delivery</h2>
          <p>
            We will make reasonable efforts to ensure timely shipping and
            delivery where physical products are applicable.
          </p>
          <p>
            Estimated timelines may vary based on location and service
            availability.
          </p>
        </section>

        <section className="policy-section">
          <h2>Returns and Refunds</h2>
          <p>
            Our Refund Policy governs the process and conditions for returning
            products and requesting refunds.
          </p>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and
            graphics, is the property of FITNESS SPORTS CENTER or its licensors.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            FITNESS SPORTS CENTER is not liable for any direct, indirect,
            incidental, special, or consequential damages arising from website
            use or purchases made through the platform.
          </p>
        </section>

        <section className="policy-section">
          <h2>Amendments and Termination</h2>
          <p>
            We may modify, update, or terminate these Terms and Conditions at
            any time without prior notice.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsConditionsPage;
