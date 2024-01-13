import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosComponent = ({ children, data_aos }) => {
  AOS.init();
  return (
    <div
      data-aos={data_aos}
      data-aos-duration="800"
      data-aos-easing="linear"
    >
      {children}
    </div>
  );
};

export default AosComponent;
