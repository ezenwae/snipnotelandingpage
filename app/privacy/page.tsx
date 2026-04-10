import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Snipnote",
  description: "Learn how Snipnote collects, uses, and protects your personal data.",
};

const SECTIONS = [
  {
    title: "Interpretation & Definitions",
    content: null,
    definitions: [
      { term: "Account", def: "A unique account created for you to access the Service" },
      { term: "Application", def: "Refers to Snipnote" },
      { term: "Company", def: "Refers to Snipnote" },
      { term: "Country", def: "Refers to Illinois, United States" },
      { term: "Device", def: "Any device that can access the Service" },
      { term: "Personal Data", def: "Any information that relates to an identified or identifiable individual" },
      { term: "Service", def: "Refers to the Application" },
      { term: "Service Provider", def: "Third parties who process data on our behalf" },
      { term: "Usage Data", def: "Data collected automatically from use of the Service" },
      { term: "You", def: "The individual using the Service" },
    ],
  },
  {
    title: "Collecting and Using Your Personal Data",
    subsections: [
      {
        heading: "Personal Data",
        items: ["Email address", "Account-related information"],
      },
      {
        heading: "Usage Data",
        intro: "We automatically collect:",
        items: [
          "IP address",
          "Device type and identifiers",
          "App usage behavior",
          "Time and date of access",
        ],
      },
    ],
  },
  {
    title: "Content You Provide or Capture",
    body: "Snipnote allows you to capture and process content from external sources such as video links. When you use the Service, we may process:",
    items: [
      "URLs or links you submit",
      "Audio extracted from those links",
      "Transcripts generated from that audio",
      "Text you save or create within the app",
    ],
    footer: "This content is processed solely to provide the core functionality of Snipnote.",
  },
  {
    title: "Use of Your Personal Data",
    body: "We use your data to:",
    items: [
      "Provide and maintain the Service",
      "Manage your account",
      "Process subscriptions and payments",
      "Communicate with you",
      "Improve performance and user experience",
      "Comply with legal obligations",
    ],
  },
  {
    title: "AI Processing and Third-Party Services",
    body: "Snipnote uses third-party artificial intelligence service providers to power core features. When you use AI-powered features, we may send the following data:",
    items: [
      "Video links or URLs you provide",
      "Extracted audio",
      "Generated transcripts",
      "Text you choose to process",
    ],
    footer:
      "This data is sent to third-party providers such as OpenAI and similar AI services for transcription, summarization, idea expansion, and content analysis.",
  },
  {
    title: "Important Safeguards",
    body: "Data is shared only when required to perform the requested feature. We share only the minimum necessary data. Third-party providers are required to:",
    items: [
      "Process data solely to provide functionality",
      "Maintain strict security and confidentiality",
      "Not use your data to train their models or for independent purposes",
    ],
    footer: "Snipnote does not sell your data and does not use your content outside of providing the Service.",
  },
  {
    title: "User Consent for AI Processing",
    body: "Before using AI-powered features, you will be presented with a clear in-app disclosure explaining what data will be sent, which third-party services will process it, and why the data is needed. You must take an explicit action to proceed. AI processing only occurs after you provide consent by using these features.",
  },
  {
    title: "Sharing of Your Personal Data",
    body: "We may share your data:",
    items: [
      "With Service Providers to operate and improve the app",
      "With AI Providers to perform AI-powered features",
      "For business transfers such as mergers or acquisitions",
      "With your consent when you explicitly agree",
    ],
    footer: "We do not sell your personal data.",
  },
  {
    title: "Retention of Your Personal Data",
    body: "We retain data only as long as necessary:",
    items: [
      "Account data: duration of account + up to 24 months",
      "Usage data: up to 24 months",
    ],
    footer: "We may delete or anonymize data earlier when no longer needed.",
  },
  {
    title: "Transfer of Your Personal Data",
    body: "Your data may be processed outside your location. We take reasonable steps to ensure it is handled securely and in accordance with this policy.",
  },
  {
    title: "Delete Your Personal Data",
    body: "You can request deletion of your data at any time. You may delete information through the app (if available) or contact us directly. You may request deletion of captured content, transcripts, and account data. We may retain certain data where required by law.",
  },
  {
    title: "Disclosure of Your Personal Data",
    body: "We may disclose data:",
    items: [
      "To comply with legal obligations",
      "To protect our rights",
      "To prevent fraud or misuse",
      "In connection with business transactions",
    ],
  },
  {
    title: "Security of Your Personal Data",
    body: "We use commercially reasonable safeguards to protect your data. No system is completely secure, but we continuously improve our protections.",
  },
  {
    title: "Children's Privacy",
    body: "Snipnote is not intended for users under 16. We do not knowingly collect data from children.",
  },
  {
    title: "Links to Other Websites",
    body: "Snipnote may contain links to third-party websites. We are not responsible for their privacy practices.",
  },
  {
    title: "Changes to This Privacy Policy",
    body: 'We may update this policy. Updates will be posted with a revised "Last updated" date.',
  },
];

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #e3e7f5 0%, #eceef8 45%, #e8ebf4 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 24px 72px",
      }}
    >
      {/* Header */}
      <header
        style={{
          width: "100%",
          maxWidth: "720px",
          display: "flex",
          alignItems: "center",
          marginBottom: "56px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/favicon.ico"
            alt="Snipnote"
            width={36}
            height={36}
            priority
            style={{ borderRadius: "9px" }}
          />
          <span
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "18px",
              color: "#1a1e2e",
              letterSpacing: "-0.02em",
            }}
          >
            Snipnote
          </span>
        </Link>
      </header>

      {/* Card */}
      <article
        style={{
          width: "100%",
          maxWidth: "720px",
          background: "rgba(255,255,255,0.88)",
          border: "1px solid rgba(200,205,225,0.6)",
          borderRadius: "24px",
          padding: "48px 52px 56px",
          boxShadow: "0 4px 32px rgba(100,90,200,0.08), 0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        {/* Title block */}
        <div style={{ marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid rgba(200,205,225,0.5)" }}>
          <h1
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 800,
              fontSize: "32px",
              letterSpacing: "-0.03em",
              color: "#1a1e2e",
              marginBottom: "8px",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              color: "#a0a5b8",
              fontWeight: 500,
            }}
          >
            Last updated: March 27, 2026
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#6b7080",
              marginTop: "16px",
            }}
          >
            This Privacy Policy describes how Snipnote collects, uses, and discloses your information
            when you use the Snipnote application. By using Snipnote, you agree to the collection and
            use of information in accordance with this Privacy Policy.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {SECTIONS.map((section) => (
            <Section key={section.title} section={section} />
          ))}

          {/* Contact */}
          <div
            style={{
              marginTop: "8px",
              padding: "24px 28px",
              background: "rgba(124,92,245,0.06)",
              border: "1px solid rgba(124,92,245,0.15)",
              borderRadius: "16px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontWeight: 700,
                fontSize: "16px",
                color: "#1a1e2e",
                letterSpacing: "-0.01em",
                marginBottom: "10px",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                lineHeight: 1.65,
                color: "#6b7080",
                marginBottom: "12px",
              }}
            >
              If you have any questions about this Privacy Policy or need support:
            </p>
            <a
              href="mailto:Snipnotedev@gmail.com"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#7c5cf5",
                textDecoration: "none",
              }}
            >
              Snipnotedev@gmail.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            color: "#b0b5c8",
            textAlign: "center",
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(200,205,225,0.4)",
          }}
        >
          © 2026 Snipnote. All rights reserved.
        </p>
      </article>
    </main>
  );
}

// ─── Section renderer ─────────────────────────────────────────────────────────

type SectionData = {
  title: string;
  content?: null;
  body?: string;
  footer?: string;
  items?: string[];
  definitions?: { term: string; def: string }[];
  subsections?: { heading: string; intro?: string; items: string[] }[];
};

function Section({ section }: { section: SectionData }) {
  return (
    <div>
      <h2
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 700,
          fontSize: "16px",
          letterSpacing: "-0.01em",
          color: "#1a1e2e",
          marginBottom: "12px",
        }}
      >
        {section.title}
      </h2>

      {section.body && (
        <p style={bodyStyle}>{section.body}</p>
      )}

      {section.definitions && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginTop: "4px",
          }}
        >
          {section.definitions.map(({ term, def }) => (
            <div key={term} style={{ display: "flex", gap: "8px", alignItems: "baseline" }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 600,
                  fontSize: "13.5px",
                  color: "#1a1e2e",
                  minWidth: "130px",
                  flexShrink: 0,
                }}
              >
                {term}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  color: "#6b7080",
                }}
              >
                — {def}
              </span>
            </div>
          ))}
        </div>
      )}

      {section.subsections &&
        section.subsections.map((sub) => (
          <div key={sub.heading} style={{ marginTop: "14px" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 600,
                fontSize: "13.5px",
                color: "#1a1e2e",
                marginBottom: "6px",
              }}
            >
              {sub.heading}
            </p>
            {sub.intro && <p style={{ ...bodyStyle, marginBottom: "6px" }}>{sub.intro}</p>}
            <BulletList items={sub.items} />
          </div>
        ))}

      {section.items && <BulletList items={section.items} />}

      {section.footer && (
        <p style={{ ...bodyStyle, marginTop: "10px" }}>{section.footer}</p>
      )}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "6px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
      {items.map((item) => (
        <li
          key={item}
          style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
        >
          <span
            style={{
              marginTop: "7px",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#7c5cf5",
              flexShrink: 0,
            }}
          />
          <span style={bodyStyle}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: "14px",
  lineHeight: 1.7,
  color: "#6b7080",
};
