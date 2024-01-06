import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useLocation, Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import LoadingAnimation from "../components/LoadingAnimation";

function SlideShow() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const location = useLocation();
  const { slideImages } = location.state;

  const onImageLoaded = () => {
    setImageLoaded(false);
  };

  return (
    <div className=" slide-container p-2 max-w-[1470px] mx-auto relative ">
      <LoadingAnimation visible={imageLoaded} />
      <Link
        to="/"
        className="absolute z-50 right-2 top-6 bg-slate-400/40 rounded-full p-1"
        title="close"
      >
        <AiOutlineClose size={28} />
      </Link>
      <Zoom scale={0.4}>
        {slideImages.map((each, index) => (
          <div
            key={index}
            className={`
            slide-image-container h-[610px] overflow-scroll 
            mx-auto scrollbar-hide  `}
          >
            <img
              onLoad={onImageLoaded}
              style={{ width: "100%" }}
              src={each}
              loading="lazy"
              className="mx-auto  "
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}

export default SlideShow;
