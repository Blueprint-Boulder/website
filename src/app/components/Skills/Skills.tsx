import React from "react";
import Wrapper from "./Wrapper";
import SkillsWrapper from "./SkillsWrapper";
import Thumbnail from "./Thumbnail";
import Details from "./Details";
import Image from "next/image";
import dev from "public/illustrations/skills.svg";
import Container from "../Containers/Container";
import Button from "../Buttons/Button";

export default function Skills() {
    return (
        <Wrapper as="div">
            <SkillsWrapper as="div">
                <Thumbnail>
                    <Image src={dev} alt="Blueprint Boulder" />
                </Thumbnail>

                <Details>
                    <h1>Are you a CU affiliate?</h1>
                    <p>
                        Blueprint Boulder is open to CU students of any skill level who are
                        interested in design, development, or establishing relationships
                        with our non-profit partners. Click below to sign up for our
                        interest form, and we&apos;ll be in contact with you soon!
                    </p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf_rvzbG-OqXEl1x7iKJWV5mv3Nnr9Zp07WFrFu0If-hSjePQ/viewform"
                    >
                        <Button>Interest Form 2023-2024</Button>
                    </a>
                </Details>

                <Details>
                    <h1>Are you a Non-profit?</h1>
                    <p>
                        We accept meeting requests from nonprofits in January and February
                        for projects during the following academic year. Our team will
                        collaborate with you to plan your software project, and finalists
                        will have their project built starting in the fall semester, with
                        completion by the end of the spring semester
                    </p>
                    <a target="_blank" rel="noreferrer" href="">
                        <Button>Work With Us!</Button>
                    </a>
                </Details>
            </SkillsWrapper>
        </Wrapper>
    );
}
