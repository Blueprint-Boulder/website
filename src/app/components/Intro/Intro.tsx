import React from "react";
import devBlack from "@public/illustrations/banner.png";
import devWhite from "@public/illustrations/bannerWhite.png";
import Wrapper from "./Wrapper";
import IntroWrapper from "./IntroWrapper";
import Details from "./Details";
import Thumbnail from "./Thumbnail";
import { Helmet } from "react-helmet";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import Link from "next/link";

config.autoAddCss = false;

const Intro: React.FC = () => {
  // const { theme } = useTheme();
  return (
    <Wrapper>
      <Head>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag('event', 'page_view', {
            'page_title': 'Home Page',
            page_location: 'Default',
            page_path: '/',
            send_to:'${process.env.GOOGLE_ANALYTICS_ID}'
          });
        `}</script>
      </Head>
      {/* TODO: Uncomment Header when implemented. */}
      {/* <Header /> */}
      <IntroWrapper>
        <Details>
          <h1>Hi There!</h1>
          <h4>
            We&apos;re Blueprint Boulder, and we&apos;ve been creating tech for
            social good since 2020.
          </h4>
          <div className="flex flex-row flex-wrap gap-2">
            {/* TODO: Update href to contact scroll */}
            <Link href="/" className="btn-primary text-white">
              Get in touch!
            </Link>
            <a
              href="https://instagram.com/blueprintboulder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              <FontAwesomeIcon icon={faInstagram} /> Updates
            </a>
            <a
              href="https://linktr.ee/blueprintboulder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              <FontAwesomeIcon icon={faLink} /> Links
            </a>
          </div>
          <br />
          <br />
          <a href="https://calblueprint.org/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLink} />
            Looking for our parent organization at Berkeley?
          </a>
        </Details>
        <Thumbnail
          src={"/illustrations/banner.png"}
          alt="We're Blueprint Boulder, and we make tech happen for social good."
        />
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
