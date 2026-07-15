"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "../data/menu.json";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);

  return (
    <section className="section menu-section" id="speisekarte">
      <motion.div 
        className="menu-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="section-header center">
          <p className="eyebrow">Speisekarte</p>
          <h2>Drinks & Shishas</h2>
        </div>
        
        <div className="menu-tabs">
          <div className="tab-buttons">
            {menuData.map(category => (
              <button 
                key={category.id} 
                className={`tab-btn ${activeTab === category.id ? "active" : ""}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            <AnimatePresence mode="wait">
              {menuData.map(category => (
                activeTab === category.id && (
                  <motion.div 
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="tab-pane"
                  >
                    <div className="menu-grid">
                      {category.items.map((item, index) => (
                        <div className="menu-item" key={index}>
                          <div className="menu-item-header">
                            <span className="menu-item-name">{item.name}</span>
                            <span className="menu-item-line"></span>
                            <span className="menu-item-price">{item.price}</span>
                          </div>
                          {item.description && <p className="menu-item-desc">{item.description}</p>}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
