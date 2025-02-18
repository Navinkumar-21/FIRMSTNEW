import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaPlay, FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import "./FeedbackVideo.css";

const videos = [
  { id: 1, thumbnail: "https://via.placeholder.com/800x450", videoUrl: "#" },
  { id: 2, thumbnail: "https://via.placeholder.com/800x450", videoUrl: "#" },
  { id: 3, thumbnail: "https://via.placeholder.com/800x450", videoUrl: "#" },
  { id: 4, thumbnail: "https://via.placeholder.com/800x450", videoUrl: "#" },
  { id: 5, thumbnail: "https://via.placeholder.com/800x450", videoUrl: "#" },
];

const FeedbackVideo = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  // Auto-slide effect (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to next video
  const nextSlide = () => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to previous video
  const prevSlide = () => {
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  // Function to go to specific indicator video
  const goToSlide = (index) => {
    setSlideDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  return (
    <section className="feedback-section" id="feedback-section">
      <h2 className="feedback-heading">{t("feedbackVideo.heading")}</h2>
      <p className="feedback-subheading">{t("feedbackVideo.subheading")}</p>

      <div className="video-carousel">
        <div className={`video-container ${slideDirection}`}>
          {/* Video Placeholder */}
          <img
            src={videos[currentIndex].thumbnail}
            alt={`Video ${currentIndex + 1}`}
            className="video-thumbnail"
          />

          {/* Play Button */}
          <button
            className="play-button"
            onClick={() => setSelectedVideo(videos[currentIndex].videoUrl)}
          >
            <FaPlay className="play-icon" />
          </button>

          {/* Left Arrow */}
          <div className="left-arrow" onClick={prevSlide}>
            <FaArrowLeft className="arrow-icon" />
          </div>

          {/* Right Arrow */}
          <div className="right-arrow" onClick={nextSlide}>
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {videos.map((_, index) => (
            <FaCircle
              key={index}
              className={`indicator-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Video Modal (if a video is selected) */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-wrapper">
            <iframe
              src={selectedVideo}
              title="Feedback Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedbackVideo;
