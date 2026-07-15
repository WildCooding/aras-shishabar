"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function OpeningStatus({ variant = "heading" }) {
  const [status, setStatus] = useState({ state: "closed", text: "Geschlossen", color: "#6b7280" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateStatus = () => {
      const now = new Date();
      // Get time in Berlin time zone
      const berlinStr = now.toLocaleString("en-US", { timeZone: "Europe/Berlin" });
      const berlinTime = new Date(berlinStr);
      
      const day = berlinTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
      const hours = berlinTime.getHours();
      const mins = berlinTime.getMinutes();
      
      const totalMins = hours * 60 + mins;
      
      let isOpen = false;
      let closingMins = 0;
      
      // Handle late night hours (00:00 to 03:00 on Sat/Sun morning)
      if (day === 6 || day === 0) {
        if (hours < 3) {
          isOpen = true;
          closingMins = (3 * 60) - totalMins;
        }
      }

      // Handle evening hours (17:00 onwards)
      if (!isOpen && hours >= 17) {
        isOpen = true;
        if (day === 5 || day === 6) {
          closingMins = ((24 + 3) * 60) - totalMins; // Closes 03:00 next day
        } else {
          closingMins = (24 * 60) - totalMins; // Closes 00:00
        }
      }

      if (isOpen) {
        if (closingMins <= 60) {
          setStatus({ state: "closing", text: `Schließt in ${closingMins} Min.`, color: "#f59e0b" }); // Orange
        } else {
          setStatus({ state: "open", text: "Jetzt geöffnet", color: "#10b981" }); // Green
        }
      } else {
        setStatus({ state: "closed", text: "Geschlossen – Öffnet um 17:00", color: "#6b7280" }); // Gray
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <h2 style={{ opacity: 0 }}>Laden...</h2>;

  const dot = (
    <motion.div 
      animate={status.state === 'open' ? { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] } : {}}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{
        width: variant === "tag" ? "8px" : "16px",
        height: variant === "tag" ? "8px" : "16px",
        borderRadius: "50%",
        backgroundColor: status.color,
        boxShadow: `0 0 ${variant === "tag" ? "6px" : "12px"} ${status.color}`,
        flexShrink: 0
      }}
    />
  );

  if (variant === "tag") {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
        {dot}
        {status.text}
      </span>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", margin: "8px 0" }}>
      {dot}
      <h2 style={{ margin: 0, textTransform: "uppercase", fontSize: "1.75rem", lineHeight: 1 }}>{status.text}</h2>
    </div>
  );
}
