import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | gözümün nuru",
  description:
    "The contractual terms that govern your access to gözümün nuru and its offerings.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    content:
      "By accessing or purchasing through gözümün nuru you agree to be bound by these Terms of Service, our Privacy Policy, and any additional policies referenced here. You must be at least 13 years old or the age of majority in your jurisdiction to place an order.",
  },
  {
    title: "2. Services",
    content:
      "We provide curated jewellery selections, made-to-order pieces, and related digital content. Features may evolve or be discontinued without prior notice. Some offerings may have extra conditions that will be presented at checkout.",
  },
  {
    title: "3. Account and Conduct",
    content:
      "You are responsible for safeguarding account credentials, providing accurate information, and using the Services only through the interfaces we publish. Automated scraping, security testing, or disruptive behaviour is prohibited.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All artwork, photography, copy, and software on gözümün nuru remain our property or that of our licensors. You receive a limited, non-transferable licence to browse and place orders. Any reproduction or derivative use requires written consent.",
  },
  {
    title: "5. Orders, Pricing, Payments",
    content:
      "Placing an order is an offer; we accept it when we confirm dispatch. Prices include applicable taxes unless stated otherwise. Payment processors act on our behalf and may conduct fraud screening. You authorise them to charge your selected payment method.",
  },
  {
    title: "6. Shipping, Returns, Cancellations",
    content:
      "Estimated delivery dates are not guaranteed. You may cancel before production or packing begins. Unless otherwise stated, returns are accepted within 14 days of receipt provided items are unworn and in original packaging.",
  },
  {
    title: "7. Warranties and Disclaimer",
    content:
      "We provide the Services on an “as is” and “as available” basis. To the fullest extent permitted by law we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "To the extent allowed by law our aggregate liability for any claim arising out of these Terms will not exceed the greater of USD 100 or the amount you paid us in the six months preceding the event giving rise to the claim. Indirect or consequential damages are excluded.",
  },
  {
    title: "9. Termination",
    content:
      "You may stop using the Services at any time. We may suspend or terminate access if you breach these Terms, create risk or legal exposure for us, or if providing the Services is no longer commercially viable.",
  },
  {
    title: "10. Governing Law and Disputes",
    content:
      "Unless mandatory consumer laws require otherwise, these Terms are governed by the laws of Turkey, and disputes will be handled by the courts of Istanbul (Central). You may also bring claims in your local courts where such rights exist.",
  },
  {
    title: "11. Changes to These Terms",
    content:
      "We may revise these Terms to reflect new features or legal requirements. Material changes will be announced on this page at least 30 days before taking effect. Continued use after the effective date constitutes acceptance.",
  },
  {
    title: "12. Contact",
    content:
      "Questions about these Terms can be sent to legal@gozumunnuru.com. Please include your order reference where relevant so we can respond quickly.",
  },
];

export default function TermsOfServicePage() {
  return (
    <section style={wrapperStyle}>
      <div style={contentStyle}>
        <p style={eyebrowStyle}>Effective: 17 November 2025</p>
        <h1 style={titleStyle}>Terms of Service</h1>
        <p style={leadStyle}>
          These Terms summarise the rules you agree to when using gözümün nuru. Please
          read each section carefully before placing an order or continuing to browse.
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
  backgroundColor: "#f5f0ea",
};

const contentStyle: React.CSSProperties = {
  maxWidth: "960px",
  margin: "0 auto",
};

const eyebrowStyle: React.CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "0.75rem",
  color: "#7e5b45",
  marginBottom: "1rem",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  lineHeight: 1.2,
  marginBottom: "1rem",
  color: "#24160f",
};

const leadStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#3f2b20",
  marginBottom: "2.5rem",
};

const stackStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const textBlockStyle: React.CSSProperties = {
  borderBottom: "1px solid rgba(63, 43, 32, 0.2)",
  paddingBottom: "1.5rem",
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#24160f",
  marginBottom: "0.75rem",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#3f2b20",
  lineHeight: 1.7,
};

