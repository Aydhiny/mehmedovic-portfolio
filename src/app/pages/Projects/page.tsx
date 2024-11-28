import ProjectBox from "@/components/ProjectBox";
import React from "react";

export default function page() {
  return (
    <div className="px-52 flex flex-col">
      <h1 className="text-6xl font-bold">Github Repositories</h1>
      <div>
        <ProjectBox
          name="FIT-Faculty-Work"
          description="Faculty of Information Technologies Repository. Used for professional Faculty work in various programming technologies such as C++, C#, DOTNET, SQL and others"
          tech="TSQL"
          color="orange"
        />
        <ProjectBox
          name="unity-hunter-mouse"
          description="Embark on a thrilling adventure through vibrant worlds and challenging obstacles in this meticulously crafted 3D platformer, handcrafted from scratch using Unity."
          tech="C#"
          color="green"
        />
        <ProjectBox
          name="filmatic-app"
          description="🎬 A Next.js app for browsing and discovering movies with server-side rendering and dynamic search."
          tech="JavaScript"
          color="yellow"
        />
      </div>
      <p className="text-gray-400 font-semibold my-4 cursor-pointer">
        See all repositories --{">"}{" "}
      </p>
    </div>
  );
}
