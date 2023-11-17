import React from "react";
import Wrapper from "./Wrapper";
import IntroWrapper from "./IntroWrapper";
import Container from "@components/Containers/Container";
import Details from "./Details";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
import banner from "@public/illustrations/team-banner.png";

export default function PeopleWelcome() {
  return (
    <Wrapper>
      <IntroWrapper>
        <Details>
          <h4 className="z-10 relative">
            We are students from the University of Colorado Boulder with a keen
            interest in making a positive impact on the world.
          </h4>
        </Details>
        <Thumbnail>
          <Image
            src={banner}
            width={0}
            height={0}
            quality={100}
            alt="We're Blueprint Boulder, and we make tech happen for social good."
            style={{ zIndex: 10 }}
          />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
}
