import React from "react";
import ProfileProjectsItem from "./ProfileProjectsItem";
import current from "../../../data/current.json";
import past from "../../../data/past.json";

interface ProfileProjectsProps {
  name?: string;
  lite?: boolean;
}

const ProfileProjects: React.FC<ProfileProjectsProps> = ({ name, lite }) => {
  if (!name || name === "") {
    return null;
  }

  let projectList = [];

  for (let i = 0; i < current.length; i++) {
    if (current[i].members !== undefined && current[i].members.includes(name)) {
      projectList.push({ name: current[i].name, img: current[i].image_url });
    }
  }

  for (let i = 0; i < past.length; i++) {
    if (past[i].members !== undefined && past[i].members.includes(name)) {
      projectList.push({ name: past[i].name, img: past[i].image_url });
    }
  }

  if (projectList.length === 0) {
    return null;
  }

  return (
    <div>
      {lite ? (
        <div className="ml-auto mt-auto">
          <div
            className={`ml-auto grid gap-4 justify-right justify-items-right align-content-right align-items-right ${
              Math.ceil(projectList.length / 2) !== projectList.length / 2
                ? "mb-0"
                : ""
            }`}
            style={{
              gridTemplateColumns: `repeat(${Math.ceil(
                projectList.length / 2,
              )}, 1fr)`,
            }}
          >
            {projectList.map((proj) => (
              <ProfileProjectsItem
                key={proj.name}
                lite
                alt={proj.name}
                name={proj.name}
                srcDark={proj.img}
                srcLight={proj.img}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <h6>Projects</h6>
          <div
            className={`grid gap-2 justify-evenly justify-items-left align-content-evenly align-items-center mb-4 ${
              projectList.length === 1
                ? "grid-cols-1"
                : `grid-cols-${projectList.length}`
            }`}
          >
            {projectList.map((proj) => (
              <ProfileProjectsItem
                key={proj.name}
                alt={proj.name}
                name={proj.name}
                srcDark={proj.img}
                srcLight={proj.img}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileProjects;
