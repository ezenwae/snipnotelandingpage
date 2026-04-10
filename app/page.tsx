"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function LogoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="url(#logo-gradient)" />
      <g transform="translate(8, 11)">
        <rect x="0" y="7" width="4" height="11" rx="2" fill="white" opacity="0.9" />
        <rect x="6" y="3" width="4" height="15" rx="2" fill="white" />
        <rect x="12" y="0" width="4" height="18" rx="2" fill="white" />
        <rect x="18" y="5" width="4" height="13" rx="2" fill="white" opacity="0.85" />
      </g>
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c5cf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function IconTranscribe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c5cf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconThink() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c5cf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconRoute() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c5cf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconApple() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: <IconShare />,
    title: "Share",
    desc: "See something interesting on TikTok, Reels, or YouTube? Tap share and send it to Snipnote.",
    delay: "0.15s",
  },
  {
    icon: <IconTranscribe />,
    title: "Transcribe",
    desc: "Snipnote instantly extracts and transcribes the audio into clean, high-fidelity text.",
    delay: "0.25s",
  },
  {
    icon: <IconThink />,
    title: "Think",
    desc: "Choose an AI action — expand, challenge, summarize, or create from the transcript.",
    delay: "0.35s",
  },
  {
    icon: <IconRoute />,
    title: "Route",
    desc: "One tap opens ChatGPT, Claude, or Gemini with your transcript and prompt ready to go.",
    delay: "0.45s",
  },
];

function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: string;
}) {
  return (
    <div
      className="animate-fade-up"
      style={{
        animationDelay: delay,
        background: "rgba(255,255,255,0.88)",
        border: "1px solid rgba(200,205,225,0.6)",
        borderRadius: "20px",
        padding: "32px 24px 32px",
        boxShadow: "0 4px 24px rgba(100,90,200,0.07), 0 1px 4px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          background: "rgba(124,92,245,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "14px",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 700,
          fontSize: "15px",
          color: "#1a1e2e",
          marginBottom: "8px",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "13px",
          lineHeight: "1.6",
          color: "#7a8099",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (email) setNotified(true);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #e3e7f5 0%, #eceef8 45%, #e8ebf4 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 24px 56px",
      }}
    >
      {/* Logo + wordmark */}
      <header
        className="animate-fade-up"
        style={{ display: "flex", alignItems: "center", gap: "10px", animationDelay: "0s" }}
      >
        <Image src="/favicon.ico" alt="Snipnote" width={40} height={40} priority style={{ borderRadius: "10px" }} />
        <span
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 700,
            fontSize: "20px",
            color: "#1a1e2e",
            letterSpacing: "-0.02em",
          }}
        >
          Snipnote
        </span>
      </header>

      {/* Hero */}
      <div
        className="animate-fade-up"
        style={{ textAlign: "center", maxWidth: "700px", animationDelay: "0.05s" }}
      >
        <h1
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 800,
            fontSize: "clamp(42px, 7vw, 68px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#1a1e2e",
            marginBottom: "22px",
          }}
        >
          Share. Transcribe.{" "}
          <span
            style={{
              color: "#7c5cf5",
              display: "inline-block",
            }}
          >
            Think.
          </span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "17px",
            lineHeight: 1.65,
            color: "#6b7080",
            maxWidth: "440px",
            margin: "0 auto",
          }}
        >
          Capture ideas from TikTok, Reels & YouTube. Transcribe and route to AI — all from the share sheet.
        </p>
      </div>

      {/* Feature cards */}
      <div
        className="feature-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          maxWidth: "760px",
          width: "100%",
        }}
      >
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      {/* App Store CTA */}
      <div
        className="animate-fade-up"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0", animationDelay: "0.5s" }}
      >
        <a
          href="https://apps.apple.com/us/app/snipnote-capture-ideas/id6760924955"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#7c5cf5",
            color: "white",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 600,
            fontSize: "16px",
            padding: "14px 32px",
            borderRadius: "100px",
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(124,92,245,0.32), 0 2px 8px rgba(124,92,245,0.2)",
            transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
            marginBottom: "24px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 12px 40px rgba(124,92,245,0.38), 0 4px 12px rgba(124,92,245,0.25)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 8px 32px rgba(124,92,245,0.32), 0 2px 8px rgba(124,92,245,0.2)";
          }}
        >
          <IconApple />
          Download on the App Store
        </a>

        {/* Android divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            width: "340px",
            marginBottom: "18px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#a0a5b8",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
            }}
          >
            Android Coming Soon
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
        </div>

        {/* Email notify */}
        {notified ? (
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "14px",
              color: "#7c5cf5",
              fontWeight: 500,
            }}
          >
            You're on the list!
          </p>
        ) : (
          <form
            onSubmit={handleNotify}
            style={{ display: "flex", gap: "8px" }}
          >
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                color: "#1a1e2e",
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "100px",
                padding: "10px 18px",
                outline: "none",
                width: "200px",
                backdropFilter: "blur(8px)",
              }}
            />
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#3d3d55",
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "100px",
                padding: "10px 18px",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "border-color 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#7c5cf5";
                (e.currentTarget as HTMLButtonElement).style.color = "#7c5cf5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.1)";
                (e.currentTarget as HTMLButtonElement).style.color = "#3d3d55";
              }}
            >
              <IconBell />
              Notify Me
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "32px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          href="/privacy"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            fontWeight: 500,
            color: "#a0a5b8",
            textDecoration: "none",
            letterSpacing: "0.01em",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#7c5cf5";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#a0a5b8";
          }}
        >
          Privacy Policy
        </Link>
        <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#c8ccd8", flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            color: "#c8ccd8",
            fontWeight: 500,
          }}
        >
          © 2026 Snipnote
        </span>
      </footer>
    </main>
  );
}
