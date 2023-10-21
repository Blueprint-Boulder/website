import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import NextThemeProvider from "./providers/NextThemeProvider";
import Script from "next/script";
import { PreloadResources } from "./preload-resources";
import { Poppins } from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blueprint Boulder",
  metadataBase: new URL("https://blueprintboulder.org"),
  description:
    "Blueprint Boulder is a student-run organization that makes tech happen for social good.",
  applicationName: "Blueprint Boulder",
  openGraph: {
    title: "Blueprint Boulder",
    description:
      "Blueprint Boulder is a student-run organization that makes tech happen for social good.",
    url: "https://blueprintboulder.org",
    siteName: "Blueprint Boulder",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    site: "@blueprintboulder",
    title: "Blueprint Boulder",
    description:
      "Blueprint Boulder is a student-run organization that makes tech happen for social good.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "Michal Bodzianowski",
		"url": "https://blueprintboulder.org",
		"logo": "https://blueprintboulder.org/favicon/favicon-512.png",
		"foundingDate": "2020",
		"founders": [{
			"@type": "Person",
			"name": "Michal Bodzianowski"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "blueprintboulder@colorado.edu",
			"telephone": "phone number",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Boulder",
			"addressRegion": "Colorado",
			"addressCountry": "United States",
			"postalCode": "80310"
		},
		"sameAs": [
			"https://www.youtube.com/channel/UCfD84rDxS70h5P9zomNo-7A",
			"https://www.linkedin.com/company/blueprint-boulder/",
			"https://www.instagram.com/blueprintboulder/",
			"https://github.com/Blueprint-Boulder",
		]
  	}`;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto_mono.variable} ${poppins.variable}`}>
        <PreloadResources />
        <NextThemeProvider>{children}</NextThemeProvider>
        <Script id="structured-data" type="application/ld+json">
          {structuredDataOrganization}
        </Script>
      </body>
    </html>
  );
}
