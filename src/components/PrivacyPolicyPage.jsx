import "./PolicyPage.css";

const PrivacyPolicyPage = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  return (
    <main className={`policy-page ${mode}`}>
      <div className="container policy-container">
        <p className="policy-breadcrumb">Policy Documents</p>
        <h1>Privacy Policy</h1>
        <p className="policy-updated">Last updated: April 6, 2026</p>

        <section className="policy-section">
          <h2>Overview</h2>
          <p>
            At FITNESS SPORTS CENTER, we are committed to protecting the privacy
            and security of our customers' personal information.
          </p>
          <p>
            By using our website, you consent to the data practices described in
            this policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>
          <ul>
            <li>Personal details such as your name, email address, and phone number.</li>
            <li>Payment and billing details required to process orders securely.</li>
            <li>Browsing data such as IP address, browser type, and device information.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Use of Information</h2>
          <ul>
            <li>To process and fulfill orders.</li>
            <li>To provide support and respond to inquiries.</li>
            <li>To personalize user experience and show relevant promotions.</li>
            <li>To improve our services and website performance.</li>
            <li>To detect and prevent fraud and abuse.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Information Sharing</h2>
          <p>
            We do not sell or trade your personal information to third parties.
          </p>
          <p>
            We may share information with trusted service providers and when
            legally required.
          </p>
        </section>

        <section className="policy-section">
          <h2>Data Security</h2>
          <p>
            We use industry-standard safeguards to protect your information from
            unauthorized access, alteration, or disclosure.
          </p>
          <p>
            No transmission or storage method is completely secure, and absolute
            security cannot be guaranteed.
          </p>
        </section>

        <section className="policy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tools to improve browsing experience and
            analyze website traffic. You can adjust cookie settings in your
            browser.
          </p>
        </section>

        <section className="policy-section">
          <h2>Policy Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Any updates
            will be posted on this page with a revised date.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            For questions about this Privacy Policy, please contact us through
            the contact section of our website.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
