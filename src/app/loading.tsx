import React from "react";
import Ripple from "../images/ripple.svg";
import Image from "next/image";

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
      <Image src={Ripple} alt="Loading..." />
    </div>
  );
}
