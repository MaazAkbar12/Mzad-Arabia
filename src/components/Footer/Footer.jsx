import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <img
            src={logo}
            alt="Aura Market"
            className="footer-logo"
          />

          <p>
            {t("footer.description")}
          </p>

          <div className="social-links">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Links */}
        <div className="footer-links">

          {/* Categories */}
          <div>

            <h4>{t("footer.categories")}</h4>

            <ul>

              <li><a href="#">{t("footer.vehicles")}</a></li>

              <li><a href="#">{t("footer.jobs")}</a></li>

              <li><a href="#">{t("footer.realEstate")}</a></li>

              <li><a href="#">{t("footer.electronics")}</a></li>

              <li><a href="#">{t("footer.services")}</a></li>

            </ul>

          </div>

          {/* Information */}
          <div>

            <h4>{t("footer.information")}</h4>

            <ul>

              <li><a href="#">{t("footer.aboutUs")}</a></li>

              <li><a href="#">{t("footer.termsOfService")}</a></li>

              <li><a href="#">{t("footer.privacyPolicy")}</a></li>

            </ul>

          </div>

          {/* Help */}
          <div>

            <h4>{t("footer.help")}</h4>

            <ul>

              <li><a href="#">{t("footer.contactUs")}</a></li>

              <li><a href="#">{t("footer.faq")}</a></li>

              <li><a href="#">{t("footer.support")}</a></li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          {t("footer.copyright")}
        </p>

      </div>

    </footer>
  );
}