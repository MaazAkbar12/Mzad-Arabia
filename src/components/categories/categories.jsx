import React, { useState } from 'react';
import './categories.css';
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t("categoriess.vehicles"),
      ads: "47,400 ads",
      items: [
        { name: t("categoriesItems.cars"), icon: "🚗" },
        { name: t("categoriesItems.carShowrooms"), icon: "🏬" },
        { name: t("categoriesItems.carServices"), icon: "🛠️" },
        { name: t("categoriesItems.spareParts"), icon: "⚙️" },
        { name: t("categoriesItems.carRentals"), icon: "🚙" },
        { name: t("categoriesItems.motorcycles"), icon: "🏍️" }
      ]
    },
    {
      title: t("categoriess.jobs"),
      ads: "9,635 ads",
      items: [
        { name: t("categoriesItems.jobVacancies"), icon: "💼" },
        { name: t("categoriesItems.jobSeekers"), icon: "📄" },
        { name: t("categoriesItems.freelancers"), icon: "🤝" }
      ]
    },
    {
      title: t("categoriess.realEstate"),
      ads: "32,367 ads",
      items: [
        { name: t("categoriesItems.residentialSale"), icon: "🔑" },
        { name: t("categoriesItems.lands"), icon: "🏔️" },
        { name: t("categoriesItems.furniture"), icon: "🛋️" },
        { name: t("categoriesItems.residentialRent"), icon: "🏠" },
        { name: t("categoriesItems.commercialSale"), icon: "🏗️" },
        { name: t("categoriesItems.commercialRent"), icon: "🏢" }
      ]
    },
    {
      title: t("categoriess.electronics"),
      ads: "26,497 ads",
      items: [
        { name: t("categoriesItems.mobiles"), icon: "📱" },
        { name: t("categoriesItems.electronics"), icon: "💻" },
        { name: t("categoriesItems.homeAppliances"), icon: "📺" },
        { name: t("categoriesItems.cameraVideos"), icon: "📷" },
        { name: t("categoriesItems.electronicGames"), icon: "🎮" }
      ]
    },
    {
      title: t("categoriess.services"),
      ads: "200 ads",
      items: [
        { name: t("categoriesItems.airConditioners"), icon: "❄️" },
        { name: t("categoriesItems.cleanServices"), icon: "🧹" },
        { name: t("categoriesItems.occasions"), icon: "🎉" },
        { name: t("categoriesItems.construction"), icon: "🏗️" },
        { name: t("categoriesItems.furnitureMoving"), icon: "📦" },
        { name: t("categoriesItems.transportServices"), icon: "🚛" },
        { name: t("categoriesItems.education"), icon: "📚" },
        { name: t("categoriesItems.sellingProjects"), icon: "📊" },
        { name: t("categoriesItems.maintenanceServices"), icon: "🔧" },
        { name: t("categoriesItems.businessServices"), icon: "📈" }
      ]
    }
  ];

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseMove = (e, index) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    setRotateX(-y / 15);
    setRotateY(x / 15);
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setActiveCard(null);
  };

  return (
    <div className="categories-container">
      {data.map((category, catIndex) => (
        <div className="category-section" key={catIndex}>
          <div className="category-header">
            <h2>{category.title}</h2>
            <span className="ads-count">{category.ads}</span>
          </div>

          <div className="subcategory-grid">
            {category.items.map((item, index) => {
              const unique = `${catIndex}-${index}`;
              const active = activeCard === unique;

              return (
                <div
                  key={index}
                  className={`subcategory-card ${
                    index % 2 === 0 ? "large-card" : "small-card"
                  }`}
                  onMouseMove={(e) => handleMouseMove(e, unique)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: active
                      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
                      : "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
                  }}
                >
                  <div className="card-content">
                    <span className="card-title">{item.name}</span>
                  </div>

                  <div className="card-vector-wrapper">
                    <span className="card-vector-emblem">{item.icon}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;