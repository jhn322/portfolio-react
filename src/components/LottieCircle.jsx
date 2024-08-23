import React from "react";
import Lottie from "lottie-react";
import backgroundAnimation from "../json/lottieCircle.json";

const lottieCircle = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        animationData={backgroundAnimation}
        loop={true}
        autoplay={true}
        style={{
          width: "60rem",
          height: "60rem",
          zIndex: 2,
        }}
      />
      {children}
    </div>
  );
};

export default lottieCircle;
