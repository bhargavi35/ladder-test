import React, { useEffect, useState } from "react";
import "./styles.css";

const Footer = () => {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerPosition = document.querySelector(".footer").getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerPosition <= windowHeight) {
        setShowPreloader(true); // Trigger animation when footer comes into view
      } else {
        setShowPreloader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      {/* Preloader Animation */}
      <div className="preloader">
        {showPreloader && (
          <>
            <span className="preloader-text">LI</span>
            <span className="curly-text">
              {/* <span className="letter-animation" style={{ animationDelay: '0.2s' }}>࣪</span> */}
              <span className="letter-animation" style={{ animationDelay: '0.4s' }}>സ</span>
              <span className="letter-animation" style={{ animationDelay: '0.8s' }}>സ</span>
              <span className="letter-animation" style={{ animationDelay: '1.2s' }}>സ</span>
            </span>
          </>
        )}
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-left">
          <p>Got a question?</p>
          <a href="mailto:contact@limlondon.com">Contact Us</a>
        </div>
        <div className="footer-center">
          <p>© 2025</p>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Legal</li>
        </div>
        <div className="footer-right">
          <p>
            © designed by <span className="designer-name">Bhargavi</span>
            {/* <br/>  All rights reserved. */}
          </p>
        </div>

      </div>

    </footer >
  );
};
export default Footer;


