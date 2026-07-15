import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {

  const { t } = useTranslation();


  return (

    <section className="about-section">


      <div className="about-container">


        {/* Content */}

        <div className="about-content">


          <span className="about-label">
            {t("about.label")}
          </span>



          <h2>
            {t("about.title")}
          </h2>



          <p>
            {t("about.descriptionOne")}
          </p>



          <p>
            {t("about.descriptionTwo")}
          </p>



          <div className="about-features">


            <div className="about-feature">

              <span>
                ✓
              </span>

              <p>
                {t("about.featureOne")}
              </p>

            </div>



            <div className="about-feature">

              <span>
                ✓
              </span>

              <p>
                {t("about.featureTwo")}
              </p>

            </div>



            <div className="about-feature">

              <span>
                ✓
              </span>

              <p>
                {t("about.featureThree")}
              </p>

            </div>


          </div>


        </div>





        {/* Image */}

        <div
          className="about-image"
          style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d')"
          }}
        >

        </div>


      </div>


    </section>

  );
}