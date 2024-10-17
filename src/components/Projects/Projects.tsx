import React from "react";
import { Wrapper } from "./Wrapper";
import { Grid } from "./Grid";
import { Item } from "./Item";
import { Content } from "./Content";
import current from "@data/current_projects.json";
import {
  ProjectCard,
  ProjectCardContents,
  ProjectImage,
  ProjectMembers,
  ProjectVideo,
} from "@components/ProjectCards";
import { ProjectCardName } from "@components/ProjectCards/ProjectCardName";
import { Button } from "@components/Buttons";

export const Projects: React.FC = () => {
  return (
    <Wrapper as="section" id="projects">
      <h2 className="text-2xl font-semibold">2022-2023 Projects</h2>
      <Grid>
        {current.map(
          ({
            id,
            name,
            session,
            tldr,
            description,
            image_url,
            github,
            url,
            video_url,
          }) => (
            <Item key={id}>
              <ProjectCard>
                {video_url ? (
                  <ProjectVideo src={video_url} />
                ) : (
                  <ProjectImage src={image_url} alt={name} />
                )}
                <ProjectCardContents>
                  <Content>
                    <ProjectCardName
                      github={github}
                      name={name}
                      id={id}
                      url={url}
                    />
                    <h4 className="text-lg">{tldr}</h4>
                    <p>{description}</p>
                    <ProjectMembers />
                    <small>{session}</small>
                    <br />
                  </Content>
                </ProjectCardContents>
              </ProjectCard>
            </Item>
          ),
        )}
      </Grid>
      <div className="text-center mt-8">
        <a href="projects">
          <Button>View All Projects</Button>
        </a>
      </div>
      <p className="mt-4">Click above for our completed projects and demos!</p>
    </Wrapper>
  );
};
