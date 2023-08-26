import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/projects/tesla2.png";

function SlideShow() {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  const images = [img1, img1, img1];

  return (
    <div className="slide-container p-2">
      <Zoom scale={0.4}>
        {images.map((each, index) => (
          <div className=" h-[590px] overflow-scroll mx-auto scrollbar-hide">
            <img
              key={index}
              style={{ width: "96%" }}
              src={each}
              className="mx-auto"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}

export default SlideShow;
