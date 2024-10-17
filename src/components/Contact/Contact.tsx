import React from "react";
import { Container } from "src/components/Containers";
import contact from "@public/illustrations/contact.svg";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { Wrapper } from "./Wrapper";
import { Details } from "./Details";
import { Thumbnail } from "./Thumbnail";

export const Contact = () => {
  return (
    <Wrapper as={Container} id="contact">
      <Details>
        <h2>Send us a message!</h2>
        <ContactForm />
      </Details>
      <Thumbnail>
        <Image src={contact} alt="Blueprint Boulder" />
      </Thumbnail>
    </Wrapper>
  );
};
