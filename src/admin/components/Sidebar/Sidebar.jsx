import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import logo from "../../../assets/images/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
    const { t } = useTranslation();
    const [adsDropdownOpen, setAdsDropdownOpen] = useState(true);
    const navigate = useNavigate();
    const currentLang = i18n.language || 'en';

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    };

    const handleLogout = () => {
        console.log("Logging out...");
        navigate("/login"); 
    };

    return (
        <aside className="admin-sidebar">
            {/* Logo aur Text Wrapper */}
            <div className="logo-wrapper">
                <Link to="/" className="logo-link-group">
                    <img 
                        src={logo} 
                        alt="Aura Market Logo" 
                        className="logo-image" 
                    />
                    <span className="logo-text">{t('appName')}</span>
                </Link>
            </div>

            <nav className="admin-menu">
                {/* Dashboard Link */}
                <NavLink to="/admin" end>
                    <span className="menu-icon">📊</span>
                    <span className="nav-main-label">{t('sidebar.dashboard', 'Dashboard')}</span>
                </NavLink>

                {/* Notifications Link */}
                <NavLink to="/admin/notifications" className="notification-menu-link">
                    <span className="menu-icon">🔔</span>
                    <span className="nav-main-label">{t('sidebar.notifications', 'Notifications')}</span>
                    <span className="sidebar-notification-badge">5</span>
                </NavLink>

                {/* New Ads Post Link */}
                <NavLink to="/admin/newadspost">
                    <span className="menu-icon">📝</span>
                    <span className="nav-main-label">{t('sidebar.newAdsPost', 'New Ads Post')}</span>
                </NavLink>

                {/* Sellers Link */}
                <NavLink to="/admin/sellers">
                    <span className="menu-icon">🏢</span>
                    <span className="nav-main-label">{t('sidebar.sellers', 'Sellers')}</span>
                </NavLink>

                {/* Buyers Link */}
                <NavLink to="/admin/buyers">
                    <span className="menu-icon">🛍️</span>
                    <span className="nav-main-label">{t('sidebar.buyers', 'Buyers')}</span>
                </NavLink>

                {/* Advertisements Toggle Header */}
                <div 
                    className="menu-dropdown-header" 
                    onClick={() => setAdsDropdownOpen(!adsDropdownOpen)}
                >
                    <div className="dropdown-title-group">
                        <span className="menu-icon">📢</span>
                        <span className="nav-main-label">{t('sidebar.advertisements', 'Advertisements')}</span>
                    </div>
                    <span className="dropdown-arrow">{adsDropdownOpen ? "▲" : "▼"}</span>
                </div>

                {/* Sub Categories */}
                {adsDropdownOpen && (
                    <div className="sidebar-sub-menu">
                        <NavLink to="/admin/advertisements/all" className="sub-nav-link">
                            • {t('sidebar.allAds', 'All Ads')}
                        </NavLink>
                        <NavLink to="/admin/advertisements/active" className="sub-nav-link">
                            • {t('sidebar.activeAds', 'Active Ads')}
                        </NavLink>
                        <NavLink to="/admin/advertisements/expired" className="sub-nav-link">
                            • {t('sidebar.expiredAds', 'Expired Ads')}
                        </NavLink>
                        <NavLink to="/admin/advertisements/deleted" className="sub-nav-link">
                            • {t('sidebar.deletedAds', 'Deleted Ads')}
                        </NavLink>
                    </div>
                )}

                {/* Settings Link */}
                <NavLink to="/admin/settings">
                    <span className="menu-icon">⚙️</span>
                    <span className="nav-main-label">{t('sidebar.settings', 'Settings')}</span>
                </NavLink>
            </nav>

            {/* Bottom Actions Footer */}
            <div className="sidebar-footer">
                {/* Beautiful Sidebar Language Switcher */}
                <div className="sidebar-lang-switcher">
                    <button 
                        type="button"
                        className={`sidebar-lang-btn ${currentLang.startsWith('en') ? 'active' : ''}`} 
                        onClick={() => changeLanguage('en')}
                    >
                        🇬🇧 EN
                    </button>
                    <button 
                        type="button"
                        className={`sidebar-lang-btn ${currentLang.startsWith('ar') ? 'active' : ''}`} 
                        onClick={() => changeLanguage('ar')}
                    >
                        🇸🇦 AR
                    </button>
                </div>

                {/* Logout Button */}
                <button className="sidebar-logout-btn" onClick={handleLogout}>
                    <span className="logout-icon">🚪</span>
                    <span className="nav-main-label">{t('sidebar.logout', 'Logout')}</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;