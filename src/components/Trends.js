import React from "react";
import { FaSistrix } from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";
const Trends = () => {
  return (
    <div className="trends">
      <video autoplay="true" muted loop id="video-background">
        <source src="/videos/istockphoto-1304904006-640_adpp_is.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
        <div className="trend__icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <TrendsKeyword />
    </div>
  );
};

export default Trends;
