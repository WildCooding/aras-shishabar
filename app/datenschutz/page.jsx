"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <main className="main" style={{ minHeight: "100vh", background: "var(--color-cream)", color: "var(--color-ink)", padding: "120px clamp(20px, 5vw, 60px)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--color-gold)", textDecoration: "none", marginBottom: "40px", fontWeight: "600" }}>
          <ArrowLeft size={18} /> Zurück zur Startseite
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", margin: "0 0 32px", textTransform: "uppercase" }}>Datenschutz&shy;erklärung</h1>
          
          <section style={{ marginBottom: "32px", lineHeight: "1.6" }}>
            <h2 style={{ fontSize: "1.2rem", color: "var(--color-gold)", marginBottom: "16px" }}>1. Datenschutz auf einen Blick</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
            </p>
          </section>

          <section style={{ marginBottom: "32px", lineHeight: "1.6" }}>
            <h2 style={{ fontSize: "1.2rem", color: "var(--color-gold)", marginBottom: "16px" }}>2. Datenerfassung auf unserer Website</h2>
            <p>
              <strong>Cookies & Schriftarten</strong><br />
              Diese Website hostet alle benötigten Schriftarten (Google Fonts) lokal auf unserem eigenen Server. Es werden keine Verbindungen zu externen Servern von Google aufgebaut. Ihre IP-Adresse wird dadurch nicht an Google übertragen.
            </p>
          </section>

          <section style={{ marginBottom: "32px", lineHeight: "1.6" }}>
            <h2 style={{ fontSize: "1.2rem", color: "var(--color-gold)", marginBottom: "16px" }}>3. Plugins und Tools</h2>
            <p>
              <strong>Google Maps</strong><br />
              Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited.
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
