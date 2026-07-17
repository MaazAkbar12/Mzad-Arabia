import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./searchbar.css";

export default function SearchBar() {

  const { t } = useTranslation();

  const [showCategories, setShowCategories] = useState(false);
  //search text kelyi  filtreration state
const [searchText, setSearchText] = useState("");

  const categories = [
  {
    icon: "🚗",
    name: t("categoriess.vehicles")
  },
  {
    icon: "💼",
    name: t("categoriess.jobs")
  },
  {
    icon: "🏠",
    name: t("categoriess.realEstate")
  },
  {
    icon: "📱",
    name: t("categoriess.electronics")
  },
  {
    icon: "🛠️",
    name: t("categoriess.services")
  }
];

  const filteredCategories = categories.filter((item)=>{

  return item.name
    .toLowerCase()
    .includes(searchText.toLowerCase());

});

  return (

    <div className="search-row-orange">

      <div className="nav-container">


        <div className="search-flex-container">


          <div className="search-wrapper">

           <input

          type="text"

            placeholder={t("searchPlaceholder")}

          className="search-input"

          value={searchText}

          onChange={(e)=>setSearchText(e.target.value)}

           onFocus={() => setShowCategories(true)}

             />

          </div>



          <button className="search-btny">

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >

              <circle cx="11" cy="11" r="8" />

              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
              />

            </svg>

          </button>


        </div>



  {
  showCategories && (

    <div className="category-popup-card">


      <div className="category-popup-header">


        <h2 className="category-popup-title">
           {t("categoriess.groups")}
        </h2>


        <button
          className="category-popup-close"
          onClick={() => setShowCategories(false)}
        >
          ×
        </button>


      </div>


      <div className="category-popup-list">

        {
          filteredCategories.map((item,index)=>(

            <div
              className="category-popup-item"
              key={index}
            >

              <span className="category-popup-icon">
                {item.icon}
              </span>


              <span className="category-popup-name">
                {item.name}
              </span>


            </div>

          ))
        }

      </div>


    </div>

  )
}



      </div>

    </div>

  );

}