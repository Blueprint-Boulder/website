import React from "react";
import Wrapper from "./Wrapper";
import Container from "../Containers/Container";
import PersonGrid from "./PersonGrid";
import leaders from "@data/leadership.json";
import Item from "./Item";
import ProfileCard from "../ProfileProjects/ProfileCard";
import ProfileImage from "../ProfileProjects/ProfileImage";
import ProfileCardContents from "../ProfileProjects/ProfileCardContents";
import Content from "./Content";
import ProfileCardName from "../ProfileProjects/ProfileCardName";

export default function People() {
  return (
    <Wrapper as={Container} id="people">
      <h2>People</h2>
      <PersonGrid>
        {leaders.map(
          ({
            id,
            name,
            role,
            start_year,
            end_year,
            image_url,
            github,
            url,
            linkedin,
          }) => (
            <Item key={id}>
              <ProfileCard>
                <ProfileImage
                  src={image_url.length === 0 ? undefined : image_url}
                  alt={name}
                  width={1000}
                  height={1000}
                ></ProfileImage>
                <ProfileCardContents>
                  <Content>
                    <ProfileCardName
                      github={github}
                      name={name}
                      id={id}
                      url={url}
                      linkedin={linkedin}
                    />
                    <h4 className="dark:text-[#73b7ff] text-[#034387] font-medium">
                      {role}
                    </h4>
                    <small>
                      {start_year}-{end_year}
                    </small>
                  </Content>
                </ProfileCardContents>
              </ProfileCard>
            </Item>
          ),
        )}
      </PersonGrid>
    </Wrapper>
  );
}
