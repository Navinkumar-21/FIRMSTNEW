import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./SuccessStories.css";

const SuccessStories = () => {
  const { t } = useTranslation();

  const stories = [
    {
      id: 1,
      image: "https://static.wixstatic.com/media/df6cc5_1e46d0284a9d4e92b61b5a97f92f820e~mv2.png", // Replace with actual image path
      text: t("success_stories.story1"),
    },
    {
      id: 2,
      image: "https://static.wixstatic.com/media/df6cc5_85438f5a726e4694bc0964987ae8e895~mv2.png",
      text: t("success_stories.story2"),
    },
    {
      id: 3,
      image: "https://static.wixstatic.com/media/df6cc5_bd51b2639fea4d798feec0da56a12f1f~mv2.png",
      text: t("success_stories.story3"),
    },
  ];

  return (
    <section className="success-stories" id="success-stories">
      <h2 className="success-heading">{t("success_stories.heading")}</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            className={`story-card story-${index + 1}`}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
            style={{ zIndex: 10 - index }} // Higher z-index for the first one
          >
            {/* Image */}

            {/* Text */}
            <p className="story-text">{story.text}</p>
            

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
