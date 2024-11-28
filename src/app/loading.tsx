import React from "react";
import Ripple from "../images/ripple.svg";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={Ripple} alt="Loading..." />
    </div>
  );
}
