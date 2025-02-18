import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Programs.css"; // Import CSS

const Programs = () => {
  const { t } = useTranslation();
  const programs = t("programs.locations", { returnObjects: true }); // Get translated programs

  return (
    <section className="programs-section" id="programs-section">
      <h2 className="programs-heading">{t("programs.heading")}</h2>

      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        transitionTime={600}
        swipeable={true}
        showStatus={false}
        emulateTouch={true}
        stopOnHover={true}
        infiniteLoop={false} // Disable infinite loop to prevent reverse movement
      >
        {programs.map((program, index) => (
          <div key={index} className="carousel-item">
            {/* Left Column (Content) */}
            <div className="carousel-content">
              <h3>{program.title}</h3>
              <ul className="program-points">
                {program.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Column (Image) */}
            <div className="carousel-image">
              <img src={program.image} alt={program.title} />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Programs;
