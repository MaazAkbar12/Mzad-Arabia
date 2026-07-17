import React, { useState } from "react"; // Fixed: Imported useState
import "./header.css";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import AdsCategories from "../dropdown/AdsCategories";
import i18n from "i18next";
import SearchBar from "./searchbar";
import { Link } from "react-router-dom";


export default function Header() {
  // Fixed: State hook is now directly inside the Header component
  const [isOpen, setIsOpen,] = useState(false);
  // Naya state: click control karne ke liye
  const [showAll, setShowAll] = useState(false);
  // profile dropdown card open kelyi
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // language translation work
 const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) setShowAll(false); // Dropdown close hote hi scroll reset ho jaye
  };



  const changeLanguage = (lang) => {

  i18n.changeLanguage(lang);

  if(lang === "ar"){
    document.documentElement.dir = "rtl";
     
  }
  else{
    document.documentElement.dir = "ltr";
   
  }

};

  return (
    <header className="main-header">
      
      {/* Row 1: Crisp White Navbar */}
      <div className="top-navbar-white">
        <div className="nav-container">

          <div className="left-side">

           <div className="logo-wrapper">

               <Link to="/">
  
             <img 
               src={logo} 
                alt="Aura Market Logo" 
              className="logo-image" 
               />

            </Link>

</div>
               {/* start code   */}
            <nav className="nav-links">
              {/* Dropdown Trigger Button */}
              <div className="dropdown-link-white" onClick={toggleDropdown}>
              {t("header.adsCategories")} <span className={`arrow-down ${isOpen ? 'open' : ''}`}>▼</span>
              </div>

              {/* Dropdown Content Box */}
              {isOpen && (
    <AdsCategories
      showAll={showAll}
      setShowAll={setShowAll}
    />
  )}
            </nav>
            {/* end categories code  */}

          </div>


          <div className="right-side">

            <button className="icon-btn-white" aria-label="Notifications">
              🔔
            </button>

          <div className="profile-wrapper">
  <button
    className="icon-btn-white"
    onClick={() => setShowProfileMenu(!showProfileMenu)}
  >
    👤
  </button>

  {showProfileMenu && (
    <div className="profile-dropdown">
      <Link href="/my-ads">📋 {t("myAds")}</Link>
     <Link to="/login">
        🔑 {t("loginButton")}
      </Link>
      <Link to="/register">
  📝 {t("createAccount")}
</Link>
    </div>
  )}
</div>
              

        { i18n.language === "en" ? (
  <span
    className="lang-switch-white"
    onClick={() => changeLanguage("ar")}
  >
    AR
  </span>
) : (
  <span
    className="lang-switch-white"
    onClick={() => changeLanguage("en")}
  >
    EN
  </span>
)}


   <Link 
 to="/post-ad"
 className="add-adv-btn-white"
>
 + {t("postAdButton")}
</Link>

    

          </div>

        </div>
      </div>



      <SearchBar />

    </header>
  );
}