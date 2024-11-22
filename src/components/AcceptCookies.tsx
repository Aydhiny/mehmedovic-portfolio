"use client";
import React, { useState } from "react";

const AcceptCookies: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed z-50 text-center rounded-3xl bottom-4 left-4 bg-main-background-grey shadow-2xl p-4 w-80 lg:w-96 flex flex-col gap-3 items-start">
          <p className="text-white">
            🍪 This site uses cookies to provide you with the best experience.
          </p>
          <div className="flex-col flex w-full">
            <button
              onClick={handleButtonClick}
              className="bg-main-app-purple mb-4 w-full text-white py-2 px-4 transition-all hover:bg-main-app-teal hover:text-main-background-grey"
            >
              Accept
            </button>
            <button
              onClick={handleButtonClick}
              className="bg-main-app-purple w-full text-white py-2 px-4 transition-all hover:bg-main-background-grey hover:text-main-app-teal"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AcceptCookies;
