import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | gözümün nuru",
  description:
    "How gözümün nuru collects, uses, and safeguards customer data across its experiences.",
};

const sections = [
  {
    title: "1. Overview",
    content:
      "This Privacy Policy explains what personal information we collect when you browse gözümün nuru, create an order, or get in touch with us, and how we handle that information in line with applicable data protection laws.",
  },
  {
    title: "2. Information We Collect",
    content:
      "Depending on your interactions with us we may process contact details, shipping and billing information, purchase history, support conversations, device identifiers, and usage analytics derived from cookies or similar technologies.",
  },
  {
    title: "3. How We Use Information",
    content:
      "Data helps us process transactions, provide customer care, tailor experiences, improve site performance, comply with legal obligations, and—where you consent—send marketing updates. We do not sell personal information.",
  },
  {
    title: "4. Legal Bases",
    content:
      "We rely on contractual necessity to fulfil orders, legitimate interest for product development and security, legal obligations for bookkeeping and tax, and consent for optional communications or analytics that are not strictly necessary.",
  },
  {
    title: "5. Retention",
    content:
      "Records are kept only as long as required for the purpose collected. Commercial and tax rules may require us to retain order data for up to 10 years, after which it is anonymised or securely deleted.",
  },
  {
    title: "6. Sharing",
    content:
      "We share information with payment gateways, logistics providers, IT vendors, and professional advisers strictly on a need-to-know basis under data-processing agreements. These partners must implement safeguards equivalent to ours.",
  },
  {
    title: "7. Your Rights",
    content:
      "Where applicable you can request access, correction, deletion, restriction, objection, or data portability. You may also withdraw consent at any time without affecting the lawfulness of processing prior to withdrawal.",
  },
  {
    title: "8. Security",
    content:
      "We employ encryption in transit, network segmentation, least-privilege access, monitoring, and staff training. If we detect a breach that poses risk to you, we will notify you and relevant regulators without undue delay.",
  },
  {
    title: "9. International Transfers",
    content:
      "If data is transferred outside your jurisdiction, we rely on standard contractual clauses or equivalent safeguards to ensure your information receives consistent protection wherever it is processed.",
  },
  {
    title: "10. Contact",
    content:
      "For privacy questions or to exercise your rights, email privacy@gozumunnuru.com. Supervisory authorities may also be contacted if you believe your rights have been infringed.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section style={wrapperStyle}>
      <div style={contentStyle}>
        <p style={eyebrowStyle}>Updated: 17 November 2025</p>
        <h1 style={titleStyle}>Privacy Policy</h1>
        <p style={leadStyle}>
          Transparency matters to us. This page outlines how we collect, use, share,
          and safeguard your information when you interact with gözümün nuru.
        </p>
        <div style={stackStyle}>
          {sections.map((section) => (
            <article key={section.title} style={textBlockStyle}>
              <h2 style={headingStyle}>{section.title}</h2>
              <p style={paragraphStyle}>{section.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const wrapperStyle: React.CSSProperties = {
  padding: "8rem 1.5rem 4rem",
  backgroundColor: "#faf7f2",
};

const contentStyle: React.CSSProperties = {
  maxWidth: "960px",
  margin: "0 auto",
};

const eyebrowStyle: React.CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "0.75rem",
  color: "#a06e56",
  marginBottom: "1rem",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  lineHeight: 1.2,
  marginBottom: "1rem",
  color: "#2d1e16",
};

const leadStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#4a372b",
  marginBottom: "2.5rem",
};

const stackStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const textBlockStyle: React.CSSProperties = {
  borderBottom: "1px solid rgba(74, 55, 43, 0.2)",
  paddingBottom: "1.5rem",
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#2d1e16",
  marginBottom: "0.75rem",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#4a372b",
  lineHeight: 1.7,
};

