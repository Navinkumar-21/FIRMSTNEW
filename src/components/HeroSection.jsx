import React from "react";
import { useTranslation } from "react-i18next";  // Importing the translation hook
import "./HeroSection.css";  // Assuming you'll add styles here

const HeroSection = () => {
  const { t } = useTranslation();  // The translations are loaded globally, so no namespace needed here

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };
  
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-section-container">
        <div className="left-side">
          <h1 className="heading">{t("heroSection.hero_title")}</h1> {/* Translating the title */}
          <p className="paragraph">
            {t("heroSection.hero_description")} {/* Translating the description */}
          </p>
          <button className="cta-button" onClick={() => handleScrollToSection("request-form-section")}>{t("heroSection.cta_button")}</button> {/* Translating the button */}
        </div>
        <div className="right-side">
          <img
            src="https://static.wixstatic.com/media/df6cc5_38266e6c422d4eeeb06cffe81dd58786~mv2.png"
            alt="Hero"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
