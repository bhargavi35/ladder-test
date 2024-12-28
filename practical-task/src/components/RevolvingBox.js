import React, { useState, useEffect } from "react";
import "./styles.css";

const RevolvingBox = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const faces = [
    {
      label: "Landscape Photography",
      description:
        "Explore the beauty of the world through our captivating landscape photography. From breathtaking vistas to hidden gems, we'll take you on a visual journey that will inspire and awe.",
      color: "#fe7638",
      bgImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXy63dYTW0F_WVrF4dTtgBcQaRg_LlbUpbkUINwE395przNDTA",
    },
    {
      label: "Documentary Photography",
      description:
        "Documentary photography serves to inform, educate, and inspire by providing a truthful and insightful representation of the world. It is used to raise awareness about important issues, document significant events, and preserve historical moments.",
      color: "#000",
      bgImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHXrSqMOoqOCmk7eolDCm9At1fboVD9L8-bTAU3-xHkmf4ognX",
    },
    {
      label: "Product Photography",
      description:
        "Showcase your products in the best possible light with our professional product photography services. Whether you're selling online or in print, we'll create images that highlight the unique features of your products and attract customers.",
      color: "#fe7638",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnTocTqwZFLWPSHMsDLnrlfUtM43v5eqlBejc22ymf8caFFyw",
    },
    {
      label: "Real Estate Photography",
      description:
        "Highlight the best features of your property with our real estate photography services. We'll use professional lighting and composition techniques to create images that make your property stand out and attract potential buyers.",
      color: "#000",
      bgImage:
        "https://framerusercontent.com/images/9V3jYmjzIjUhJVkMIMsNC9zBIc.jpg?scale-down-to=1024",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      setScrollPosition(newScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeFace = Math.floor(scrollPosition / 100) % faces.length; // Adjusting scroll sensitivity

  return (
    <div
      className="revolving-box-section"
      style={{
        backgroundImage: `url(${faces[activeFace].bgImage})`,
      }}
    >
      <div
        className="box"
        style={{
          transform: `rotateX(${activeFace * -90}deg)`,
        }}
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className={`face face-${index}`}
            style={{
              backgroundColor: face.color,
            }}
          >
            <div className="face-content">
              <div className="title">{face.label}</div>
              <div className="description">{face.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {faces.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeFace === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default RevolvingBox;
