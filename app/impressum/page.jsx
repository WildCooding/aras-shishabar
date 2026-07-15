"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <main className="main" style={{ minHeight: "100vh", background: "var(--color-cream)", color: "var(--color-ink)", padding: "120px clamp(20px, 5vw, 60px)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--color-gold)", textDecoration: "none", marginBottom: "40px", fontWeight: "600" }}>
          <ArrowLeft size={18} /> Zurück zur Startseite
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", margin: "0 0 32px", textTransform: "uppercase" }}>Impressum</h1>
          
          <section style={{ marginBottom: "32px", lineHeight: "1.6" }}>
            <h2 style={{ fontSize: "1.2rem", color: "var(--color-gold)", marginBottom: "16px" }}>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>ARAS BAR</strong><br />
              Emminger Str. 14<br />
              72202 Nagold
            </p>
          </section>

          <section style={{ marginBottom: "32px", lineHeight: "1.6" }}>
            <h2 style={{ fontSize: "1.2rem", color: "var(--color-gold)", marginBottom: "16px" }}>Kontakt</h2>
            <p>
              Telefon: +49 176 62133552<br />
              E-Mail: kontakt@aras-bar.de<br />
            </p>
          </section>

          <section style={{ marginBottom: "32px", lineHeight: "1.6" }}>
            <h2 style={{ fontSize: "1.2rem", color: "var(--color-gold)", marginBottom: "16px" }}>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" style={{ color: "var(--color-gold)" }}> https://ec.europa.eu/consumers/odr</a>.<br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
