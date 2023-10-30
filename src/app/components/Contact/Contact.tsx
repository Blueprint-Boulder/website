import React from "react";
import { Wrapper } from "./Wrapper";
import Container from "../Containers/Container";
import { Details } from "./Details";
import { ContactForm } from "./ContactForm";
import Thumbnail from "./Thumbnail";
import contact from "@public/illustrations/contact.svg";
import Image from "next/image";

export default function Contact() {
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
}
