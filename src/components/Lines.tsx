import React from "react";
import Line from "../images/line-1.svg";
import Line2 from "../images/line-2.svg";
import Image from "next/image";
export default function Lines() {
  return (
    <div>
      <Image
        src={Line}
        alt="line-1"
        className="fixed hidden xl:block top-96 z-[-1] w-full right-8 lg:right-0 lg:left-10"
        width={2000}
        height={2000}
      />
      <Image
        src={Line2}
        alt="line-1"
        className="fixed block lg:hidden rotate-180 -top-56 -right-80 z-[-1] min-w-max"
        width={2000}
        height={2000}
      />
    </div>
  );
}
