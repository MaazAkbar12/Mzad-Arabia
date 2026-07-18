import React from 'react';
import { useTranslation } from 'react-i18next'; // i18n hook import kiya
import './Dashboard.css';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-content">
      
      {/* Upper Welcoming Bar row */}
      <div className="dashboard-header-row">
        <div className="welcome-text-group">
          <h2 className="dashboard-main-title">{t('dashboard.mainTitle', 'Dashboard Overview')}</h2>
          <p className="dashboard-sub-title">{t('dashboard.subTitle', "Welcome back! Here's what's happening with Mzad Arabia today.")}</p>
        </div>
      </div>

      {/* FILTERED TOP LEVEL COUNTER CARDS (4 CARDS ONLY) */}
      <div className="counter-cards-grid">
        
        {/* Card 1: Total Sellers */}
        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">🏢</span>
            <span className="stat-badge trend-up">+12%</span>
          </div>
          <p className="stat-label">{t('dashboard.totalSellers', 'Total Sellers')}</p>
          <h3 className="stat-value">14,209</h3>
        </div>

        {/* Card 2: Total Buyers */}
        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">🛍️</span>
            <span className="stat-badge trend-up">+8%</span>
          </div>
          <p className="stat-label">{t('dashboard.totalBuyers', 'Total Buyers')}</p>
          <h3 className="stat-value">114,223</h3>
        </div>

        {/* Card 3: Active Ads */}
        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">📢</span>
            <span className="stat-badge trend-up">+18%</span>
          </div>
          <p className="stat-label">{t('dashboard.activeAds', 'Active Ads')}</p>
          <h3 className="stat-value">452,110</h3>
        </div>

        {/* Card 4: Premium Ads */}
        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">⭐</span>
            <span className="stat-badge trend-info">+5%</span>
          </div>
          <p className="stat-label">{t('dashboard.premiumAds', 'Premium Ads')}</p>
          <h3 className="stat-value">3,450</h3>
        </div>

      </div>

      {/* MIDDLE SECTION FOR DATA VISUALIZATION GRAPH SYSTEM */}
      <div className="analytics-split-grid">
        
        {/* Left Side: Analytical Graphic Platform */}
        <div className="analytics-card">
          <h3 className="section-card-title">{t('dashboard.analyticsTitle', 'Performance & Ads Analytics')}</h3>
          <div className="chart-placeholder">
            [ {t('dashboard.chartPlaceholder', 'Render charts interface dynamic logic here')} ]
          </div>
        </div>

        {/* Right Side: Recent Ads Listing Matrix Wrapper */}
        <div className="recent-ads-card">
          <div className="recent-ads-header">
            <h3 className="section-card-title">{t('dashboard.recentAds', 'Recent Ads')}</h3>
            <span className="moderate-link">{t('dashboard.moderateAds', 'Moderate Ads')}</span>
          </div>

          <div className="ads-list-wrapper">
            
            {/* Item 1 */}
            <div className="ad-item-row">
              <div className="ad-item-thumb">🚗</div>
              <div className="ad-item-details">
                <h4>Porsche 911 Carrera S</h4>
                <p>425,000 {t('dashboard.currency', 'SAR')} • {t('dashboard.locations.riyadh', 'Riyadh')}</p>
              </div>
              <span className="approve-action-btn">✓</span>
            </div>

            {/* Item 2 */}
            <div className="ad-item-row">
              <div className="ad-item-thumb">⌚</div>
              <div className="ad-item-details">
                <h4>Rolex Submariner Date</h4>
                <p>85,000 {t('dashboard.currency', 'SAR')} • {t('dashboard.locations.jeddah', 'Jeddah')}</p>
              </div>
              <span className="approve-action-btn">✓</span>
            </div>

            {/* Item 3 */}
            <div className="ad-item-row no-border">
              <div className="ad-item-thumb">🏢</div>
              <div className="ad-item-details">
                <h4>Luxury Duplex Villa</h4>
                <p>3,200,000 {t('dashboard.currency', 'SAR')} • {t('dashboard.locations.alMalqa', 'Al-Malqa')}</p>
              </div>
              <span className="approve-action-btn">✓</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;