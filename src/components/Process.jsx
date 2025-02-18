import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Process.css";

const Process = () => {
  const { t } = useTranslation(); // i18n hook
  const steps = t("process.steps", { returnObjects: true }); // Get translated steps

  return (
    <section className="process-section" id="process-section">
      <div className="process-header">
        <h2 className="process-heading">{t("process.heading")}</h2>
        <p>{t("process.subheading")}</p>
      </div>

      <div className="process-container">
        {/* Left Column (2 Steps) */}
        <div className="process-column">
          {steps.slice(0, 2).map((step, index) => (
            <motion.div
              key={index}
              className="process-card"
              initial={{ opacity: 0, x: -100 }} // Slide from left
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column (3 Steps) */}
        <div className="process-column">
          {steps.slice(2, 5).map((step, index) => (
            <motion.div
              key={index + 2}
              className="process-card"
              initial={{ opacity: 0, x: 100 }} // Slide from right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
