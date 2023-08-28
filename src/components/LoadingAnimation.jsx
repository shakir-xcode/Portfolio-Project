import React from "react";

function LoadingAnimation({ visible }) {
  return (
    <div className={` z-50 loading-container ${visible ? "flex" : "hidden"}`}>
      <div className="loading"></div>
      <div id="loading-text">loading</div>
    </div>
  );
}

export default LoadingAnimation;
