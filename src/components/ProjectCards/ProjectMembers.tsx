import React from "react";
import leaders from "@data/leadership.json";
import members from "@data/members.json";
import alumni from "@data/alumni.json";
import { ProjectPersonImg } from "./ProjectPersonImg";

interface ProjectMembersProps {
  children: React.ReactNode;
}

export const ProjectMembers: React.FC<ProjectMembersProps> = ({ children }) => {
  if (!members) return null;
  return (
    <>
      <h4 className="mt-4"></h4>
      <div
        className="grid gap-1 justify-evenly items-center mb-4"
        style={{
          gridTemplateColumns:
            "repeat(" +
            (members.length > 7
              ? Math.ceil(members.length / 2)
              : members.length) +
            ", 1fr)",
        }}
      >
        {members.map((member) => {
          for (let i = 0; i < leaders.length; i++) {
            if (leaders[i].name === member.name) {
              //Match!
              return (
                <ProjectPersonImg
                  key={member.id}
                  src={
                    leaders[i].image_url === ""
                      ? "/profiles/empty.png"
                      : leaders[i].image_url
                  }
                  alt={member.name}
                ></ProjectPersonImg>
              );
            }
          }

          for (let i = 0; i < members.length; i++) {
            if (members[i].name === member.name) {
              //Match!
              return (
                <ProjectPersonImg
                  key={member.id}
                  src={
                    members[i].image_url === ""
                      ? "/profiles/empty.png"
                      : members[i].image_url
                  }
                  alt={member.name}
                ></ProjectPersonImg>
              );
            }
          }

          for (let i = 0; i < alumni.length; i++) {
            if (alumni[i].name === member.name) {
              //Match!
              return (
                <ProjectPersonImg
                  key={member.id}
                  src={
                    alumni[i].image_url === ""
                      ? "/profiles/empty.png"
                      : alumni[i].image_url
                  }
                  alt={member.name}
                ></ProjectPersonImg>
              );
            }
          }

          return (
            <ProjectPersonImg
              key={-1}
              src={"/profiles/member.png"}
              alt="Empty"
            ></ProjectPersonImg>
          );
        })}
      </div>
    </>
  );
};
