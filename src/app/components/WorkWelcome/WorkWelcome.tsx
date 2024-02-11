import React from "react";
import Wrapper from "./Wrapper";
import IntroWrapper from "./IntroWrapper";
import Container from "@components/Containers/Container";
import Details from "./Details";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
import banner from "@public/illustrations/workwithus.png";
import Button from "../Buttons/Button";
export default function WorkWelcome() {
    return (
        <Wrapper>
            <IntroWrapper>
                <Details>
                    <h4 className="z-10 relative">
                        Blueprint can help you develop software custom to your unique nonprofit's needs completely free of charge
                    </h4>
                    <Button>
                        <a href="https://calendly.com/blueprintboulder/project-scoping" style={{ color: "white" }}>
                            Book your Initial Meeting!
                        </a>
                    </Button>
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
        </Wrapper >
    );
}
