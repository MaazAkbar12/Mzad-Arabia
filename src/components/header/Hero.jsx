import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function HeroSection() {
  const adsData = [
    { id: 1, text: "تبريد مياه الخزان - 999 ر.ق", badge: "Cool Shower", bg: "linear-gradient(135deg, #0e5cad, #063970)" },
    { id: 2, text: "الجهاز الأسرع والأكثر فعالية في الخليج", badge: "Super Cooling", bg: "linear-gradient(135deg, #11998e, #38ef7d)" },
    { id: 3, text: "أداء قوي وفعال مع ضمان شامل لمدة سنة كاملة", badge: "Premium Quality", bg: "linear-gradient(135deg, #7b4397, #dc2430)" },
    { id: 4, text: "استخدام آمن وتصميم متين عالي الجودة", badge: "Safety Verified", bg: "linear-gradient(135deg, #ff9900, #ff5500)" },
    { id: 5, text: "احمِ عائلتك من حرارة الصيف الشديدة الآن", badge: "Eco System", bg: "linear-gradient(135deg, #4e54c8, #8f94fb)" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adsData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [adsData.length]);

  return (
    <section className="hero-wrapper">
      <div className="hero-slider-container">
        
        <div className="viewport-3d-wide">
          {adsData.map((ad, index) => {
            let positionClass = "next-slide";
            if (index === currentIndex) {
              positionClass = "active-slide";
            } else if (
              index === currentIndex - 1 || 
              (currentIndex === 0 && index === adsData.length - 1)
            ) {
              positionClass = "prev-slide";
            }

            return (
              <div 
                key={ad.id} 
                className={`wide-ad-card ${positionClass}`}
                style={{ background: ad.bg }}
              >
                <div className="banner-layout-inner">
                  <div className="decorations-3d">
                    <span className="ice-cube">🧊</span>
                    <span className="snowflake-graphic">❄️</span>
                  </div>
                  <h2 className="banner-main-text">{ad.text}</h2>
                  <div className="banner-action-area">
                    <span className="premium-tag">{ad.badge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="dots-navigation">
          {adsData.map((_, index) => (
            <button
              key={index}
              className={`nav-dot-item ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show banner ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}