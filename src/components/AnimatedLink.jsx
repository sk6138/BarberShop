import React from "react";
import "../css/AnimatedLink.css";

const AnimatedLink = () => {
  return (
    <div className="link-container">
      <a href="#" className="animated-link">
        Explore Services
        <span className="arrow">→</span>
      </a>
    </div>
  );
};

export default AnimatedLink;
