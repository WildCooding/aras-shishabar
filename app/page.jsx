"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import OpeningStatus from "./components/OpeningStatus";
import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  CircleDollarSign,
  Clock,
  Coffee,
  Gem,
  Heart,
  Camera,
  MapPin,
  MessageCircle,
  Music,
  Navigation,
  Phone,
  Sparkles,
  Star,
  Trophy,
  Users
} from "lucide-react";

const phoneDisplay = "0176 62133552";
const phoneHref = "tel:+4917662133552";
const whatsappHref =
  "https://wa.me/4917662133552?text=Hi%20ARAS%20BAR%2C%20ich%20moechte%20einen%20Tisch%20reservieren.";
const jobWhatsappHref =
  "https://wa.me/4917662133552?text=Hi%20ARAS%20BAR%2C%20ich%20interessiere%20mich%20fuer%20einen%20Job%20im%20Team.";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=ARAS%20BAR%20Emminger%20Str.%2014%2072202%20Nagold";
const instagramHref = "https://www.instagram.com/aras_bar_/";

const offers = [
  {
    icon: Calendar,
    title: "Montag Chill Day",
    price: "MO",
    copy: "Jede Shisha plus Red Bull 14€. Der Wochenstart für entspannte Runden."
  },
  {
    icon: Heart,
    title: "Donnerstag Ladies Day",
    price: "Do.",
    copy: "Jeden Donnerstag: jede Shisha 10 EUR und alle Cocktails 5 EUR."
  },
  {
    icon: Award,
    title: "Stempelkarte",
    price: "Bonus",
    copy: "Stempel sammeln, Stammgast-Vorteile sichern und beim nächsten Besuch profitieren."
  },
  {
    icon: Trophy,
    title: "Alle WM Spiele",
    price: "Open Air",
    copy: "Live im Außenbereich"
  }
];

const features = [
  { icon: Gem, title: "Premium Shishas", copy: "Sauber vorbereitet, starke Sorten und Service mit Blick auf Details." },
  { icon: Coffee, title: "Cocktails & Drinks", copy: "Frische Drinks für lange Abende, Dates und Runden mit Freunden." },
  { icon: Music, title: "Chillige Atmosphäre", copy: "Warm, locker, nicht steif. Genau der Spot für den Feierabend." }
];

const jobs = [
  {
    icon: Sparkles,
    title: "Shisha Experten",
    copy: "Leidenschaft für Qualität, Geschmack und sauberes Arbeiten."
  },
  {
    icon: Briefcase,
    title: "Service Talente",
    copy: "Lächeln, Überblick und Tempo, wenn die Lounge voll wird."
  },
  {
    icon: Users,
    title: "Teamplayer",
    copy: "Zuverlässig, motiviert und mit guter Energie im Team."
  }
];

const schedule = [
  ["So-Do", "17:00-00:00"],
  ["Fr-Sa", "17:00-03:00"]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "ARAS BAR",
  description: "Shisha Bar Lounge in Nagold.",
  telephone: "+4917662133552",
  priceRange: "10-20 EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Emminger Str. 14",
    postalCode: "72202",
    addressLocality: "Nagold",
    addressCountry: "DE"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "03:00"
    }
  ],
  sameAs: [instagramHref]
};

function BrandMark({ compact = false }) {
  return (
    <span className={compact ? "brand-mark compact" : "brand-mark"} aria-hidden="true">
      <span>A</span>
    </span>
  );
}

function IconLine({ icon: Icon, title, copy }) {
  return (
    <div className="icon-line">
      <span className="icon-box" aria-hidden="true">
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{copy}</small>
      </span>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="preloader"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image src="/logo.webp" alt="ARAS BAR Logo" width={80} height={80} style={{ objectFit: 'contain' }} priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
          <header className="site-header">
            <a className="brand" href="#top" aria-label="ARAS BAR Start">
              <Image src="/logo.webp" alt="ARAS BAR Logo" width={56} height={56} style={{ objectFit: 'contain' }} />
              <span>
                ARAS BAR
                <small>Shisha | Bar | Lounge</small>
              </span>
            </a>
            <nav>
              <a href="#angebote">Angebote</a>
              <a href="#lounge">Lounge</a>
              <a href="#jobs">Jobs</a>
              <a href="#kontakt">Kontakt</a>
            </nav>
            <a className="nav-cta" href={phoneHref}>
              <Phone size={18} aria-hidden="true" />
              Anrufen
            </a>
          </header>

        <section className="hero" id="top" aria-label="ARAS BAR Nagold">
          <Image
            src="/assets/story-angebot.jpeg"
            alt="ARAS BAR Promotion mit Shisha, Drink und Lounge-Atmosphäre"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-scrim" />

          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h1>
              ARAS BAR
              <span>Nagold</span>
            </h1>
            <p className="hero-copy">
              Premium Shishas, Cocktails und entspannte Lounge-Abende in der
              Emmingerstr. 14. Ab 17:00 Uhr wird aus deinem Feierabend ein Spot
              für gute Vibes.
            </p>
            <div className="hero-actions" aria-label="Schnellaktionen">
              <a className="button primary" href={whatsappHref}>
                <MessageCircle size={20} aria-hidden="true" />
                Reservieren
              </a>
              <a className="button secondary" href={mapsHref} target="_blank" rel="noreferrer">
                <Navigation size={20} aria-hidden="true" />
                Route öffnen
              </a>
            </div>
            <div className="hero-facts" aria-label="Kurzinfos">
              <OpeningStatus variant="tag" />
              <a href="https://www.google.com/maps/search/?api=1&query=ARAS%20BAR%20Nagold" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'inherit', textDecoration: 'none' }}>
                <Star size={17} aria-hidden="true" />
                4,8 bei Google
              </a>
              <span>
                <CircleDollarSign size={17} aria-hidden="true" />
                10-20 EUR p.P.
              </span>
            </div>
          </motion.div>
        </section>

        <motion.section 
          className="quick-strip" 
          aria-label="Kontakt und Standort"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <a href={phoneHref}>
            <Phone size={22} aria-hidden="true" />
            <span>
              <strong>{phoneDisplay}</strong>
              <small>Direkt anrufen</small>
            </span>
          </a>
          <a href={mapsHref} target="_blank" rel="noreferrer">
            <MapPin size={22} aria-hidden="true" />
            <span>
              <strong>Emminger Str. 14</strong>
              <small>72202 Nagold</small>
            </span>
          </a>
          <a href={instagramHref} target="_blank" rel="noreferrer">
            <Camera size={22} aria-hidden="true" />
            <span>
              <strong>@aras_bar_</strong>
              <small>Stories & Specials</small>
            </span>
          </a>
        </motion.section>

        <motion.section 
          className="section offers" 
          id="angebote"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="section-heading">
            <p className="eyebrow dark">Aktuelle Specials</p>
            <h2>Angebote, die man direkt versteht.</h2>
            <p>
              Montag, Donnerstag und Live-Abende: klare Specials, faire Preise
              und der richtige Anlass für die nächste Runde.
            </p>
          </div>

          <div className="offers-layout">
            <div className="offer-grid">
              {offers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <article className="offer-card" key={offer.title}>
                    <div className="offer-top">
                      <span className="icon-box gold" aria-hidden="true">
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                      <strong>{offer.price}</strong>
                    </div>
                    <h3>{offer.title}</h3>
                    <p>{offer.copy}</p>
                  </article>
                );
              })}
            </div>

            <figure className="story-frame">
              <Image
                src="/assets/story-angebot.jpeg"
                alt="Aktuelle ARAS BAR Angebots-Story"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                className="story-image offer-story"
              />
            </figure>
          </div>
        </motion.section>

        <motion.section 
          className="section lounge" 
          id="lounge"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="lounge-copy">
            <p className="eyebrow">Willkommen in der Lounge</p>
            <h2>Shisha, Drinks und entspannte Abende ohne steifes Auftreten.</h2>
            <p>
              Warmes Licht, gute Musik und ein Service, der den Abend im Blick
              behält. ARAS BAR ist der Spot für Feierabend, Date Night und
              lange Runden mit Freunden.
            </p>
            <div className="feature-list">
              {features.map((feature) => (
                <IconLine key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          <div className="lounge-media" aria-label="ARAS BAR Impressionen">
            <div className="media-tile large">
              <Image
                src="/assets/story-angebot.jpeg"
                alt="Shisha und Cocktail Motiv der ARAS BAR"
                fill
                sizes="(max-width: 900px) 100vw, 520px"
                className="media-image shisha-crop"
              />
            </div>
            <div className="media-tile small">
              <Image
                src="/assets/story-jobs.jpeg"
                alt="Team-Promotion der ARAS BAR"
                fill
                sizes="(max-width: 900px) 45vw, 240px"
                className="media-image team-crop"
              />
            </div>
            <div className="media-tile caption">
              <strong>Premium Shishas</strong>
              <span>Leckere Cocktails</span>
              <span>Chillige Atmosphäre</span>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="section jobs" 
          id="jobs"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="section-heading light">
            <p className="eyebrow">Wir suchen dich</p>
            <h2>Werde Teil eines jungen Teams.</h2>
            <p>
              Motiviert, zuverlässig und mit Teamspirit: Wir suchen Menschen,
              die Service, Qualität und gute Stimmung ernst nehmen.
            </p>
          </div>

          <div className="jobs-layout">
            <div className="job-grid">
              {jobs.map((job) => {
                const Icon = job.icon;
                return (
                  <article className="job-card" key={job.title}>
                    <span className="icon-box wine" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h3>{job.title}</h3>
                    <p>{job.copy}</p>
                  </article>
                );
              })}
            </div>

            <div className="job-panel">
              <figure className="job-story">
                <Image
                  src="/assets/story-jobs.jpeg"
                  alt="ARAS BAR sucht Teammitglieder"
                  fill
                  sizes="(max-width: 900px) 100vw, 400px"
                  className="story-image job-story-image"
                />
              </figure>
              <div className="job-benefits">
                <IconLine icon={CheckCircle} title="Flexible Arbeitszeiten" copy="Abende, Events und planbare Schichten." />
                <IconLine icon={Users} title="Starkes Team" copy="Junge Crew, respektvoller Umgang, gute Stimmung." />
                <IconLine icon={Sparkles} title="Specials & Events" copy="Abwechslungsreiche Abende statt Routine." />
              </div>
              <a className="button primary full" href={jobWhatsappHref}>
                <MessageCircle size={20} aria-hidden="true" />
                Per WhatsApp bewerben
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="section visit" 
          id="kontakt"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="visit-main">
            <p className="eyebrow dark">Besuch planen</p>
            <OpeningStatus />
            <p>
              Komm vorbei, ruf direkt an oder schick eine WhatsApp, wenn du mit
              einer Gruppe reservieren möchtest.
            </p>
            <div className="visit-actions">
              <a className="button primary" href={phoneHref}>
                <Phone size={20} aria-hidden="true" />
                {phoneDisplay}
              </a>
              <a className="button dark" href={mapsHref} target="_blank" rel="noreferrer">
                <MapPin size={20} aria-hidden="true" />
                Zur Route
              </a>
            </div>
            <div className="hours" style={{ marginTop: "42px" }}>
              <h3>Öffnungszeiten</h3>
              {schedule.map(([day, time]) => (
                <div className="hours-row" key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
              <small>Einlass und Verkauf gemäß Jugendschutzgesetz.</small>
            </div>
          </div>

          <div className="visit-details">
            <div className="address-block">
              <h3>Adresse</h3>
              <p>
                ARAS BAR
                <br />
                Emminger Str. 14
                <br />
                72202 Nagold
              </p>
              <a href={mapsHref} target="_blank" rel="noreferrer" className="maps-link">
                In Google Maps öffnen
              </a>
              <div className="map-embed">
                <iframe
                  title="ARAS BAR Location Map"
                  src="https://maps.google.com/maps?q=ARAS%20BAR%20Emminger%20Str.%2014%2072202%20Nagold&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "6px", marginTop: "16px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="footer" style={{ flexWrap: "wrap", gap: "24px", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div>
          <a className="brand footer-brand" href="#top" aria-label="ARAS BAR Start" style={{ justifyContent: "center" }}>
            <Image src="/logo.webp" alt="ARAS BAR Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
            <span>
              ARAS BAR
              <small>Shisha | Bar | Lounge</small>
            </span>
          </a>
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: "0.95rem", justifyContent: "center" }}>
          <a href="/impressum" style={{ color: "var(--color-gold)", textDecoration: "none", fontWeight: "600" }}>Impressum</a>
          <a href="/datenschutz" style={{ color: "var(--color-gold)", textDecoration: "none", fontWeight: "600" }}>Datenschutz</a>
        </div>
        <p style={{ width: "100%", fontSize: "0.8rem", opacity: 0.6, marginTop: "8px" }}>
          &copy; {new Date().getFullYear()} ARAS BAR, Emminger Str. 14, 72202 Nagold. Alle Rechte vorbehalten.
        </p>
      </footer>
    </>
  );
}
