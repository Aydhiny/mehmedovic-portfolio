import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

// Define the type for props
interface ProjectBoxProps {
  name: string; // Name of the project
  description: string; // Description of the project
  tech: string; // Technologies used
  color: string; // Color (if used for styling)
  link?: string; // Optional project link
  github?: string; // Optional GitHub link
}

// Functional Component with TypeScript
const ProjectBox: React.FC<ProjectBoxProps> = ({
  name,
  description,
  tech,
  color,
  link,
  github,
}) => {
  return (
    <div className="p-12 my-4 flex border justify-between hover:shadow-2xl hover:shadow-main-app-purple transition-all duration-150 bg-main-background-grey rounded-md border-gray-400">
      {/* Links Section */}

      {/* Project Details */}

      <div className="flex flex-col">
        <h4 className="text-xl">{name}</h4>
        <p className="text-gray-300">{description}</p>
        <div className="flex items-center gap-2">
          <FaCircle style={{ color: color }} />
          <p>{tech}</p>
        </div>
      </div>
      <div className="flex text-center items-center text-white">
        <a
          className="p-4 mx-4 border border-gray-400 rounded-2xl"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-5" />
        </a>
        <a
          className="p-4 border border-gray-400 rounded-2xl"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink className="size-5" />
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
