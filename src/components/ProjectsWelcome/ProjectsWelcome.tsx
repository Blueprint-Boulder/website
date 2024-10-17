import React from "react";
import { Wrapper } from "./Wrapper";
import { IntroWrapper } from "./IntroWrapper";
import { Thumbnail } from "./Thumbnail";
import { Details } from "./Details";
import Image from "next/image";
import dev from "public/illustrations/projects-banner.png";

export const ProjectsWelcome = () => {
  return (
    <Wrapper>
      <IntroWrapper>
        <Details>
          <br />
          <h1>Curious about what we do?</h1>
          <br />
          <h4>
            Every year we help nonprofits amplify their impact with our code.
          </h4>
        </Details>
        <Thumbnail>
          <Image
            src={dev}
            alt="We're Blueprint Boulder, and we make tech happen for social good."
          />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
