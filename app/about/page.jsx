import Banner from "@/app/components/ui/Banner";
import Container from "@/app/components/ui/Container";
import AboutSkill from "./components/skill";
import AboutFairTradePriciple from "./components/fairTradePrinciple";
import AboutCommitments from "./components/commitments";
import AboutImpact from "./components/impact";
import AboutGrowth from "./components/growth";
import AboutEstablishment from "./components/establishment";
import AboutMission from "./components/mission";
import AboutLocation from "./components/locations";
import AboutAffiliations from "./components/affilations";
import AboutIntro from "./components/intro";
import Link from "next/link";

export const metadata = {
  title: "About | ACP",
  description: `The Association for Craft Producers (ACP) is a Fair Trade Organization based in Nepal, dedicated to empowering low-income artisans. Through design, marketing, and technical services, ACP combines traditional craft with contemporary design, fostering creative collaboration. ACP offers a flexible program, supporting artisans while prioritizing their welfare and environmental conservation. Experience the unique craftsmanship and sustainable initiatives of ACP in Nepal.`,
};

export default function About() {
  const title = "Discover Our Story: Who We Are and What We Stand For";
  const lists = [
    {
      name: "Mission",
      url: "#about-mission",
    },
    {
      name: "The Growth",
      url: "#about-establishment",
    },
    {
      name: "The Impact",
      url: "#about-impact",
    },
    {
      name: "Skill Categories",
      url: "#about-skill",
    },
    {
      name: "Commitment to Fair Trade",
      url: "#about-commitment",
    },
    {
      name: "Fair Trade Principles",
      url: "#about-fair-trade",
    },
    {
      name: "Affiliations",
      url: "#about-affiliations",
    },
  ];
  return (
    <>
      <Banner title={title} image="/images/hero-banner.JPG">
        <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl px-4 mx-auto xl:px-0">
          <h3 className="text-4xl font-bold leading-normal text-background font-title">
            {title}
          </h3>
        </div>
      </Banner>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-x-4">
          <div className="w-full space-y-2.5 lg:w-3/4">
            <AboutIntro />
            <AboutMission />
            <AboutEstablishment />
            <AboutGrowth />
            <AboutImpact />
            <AboutSkill />
            <AboutCommitments />
            <AboutFairTradePriciple />
            <AboutAffiliations />
          </div>
          <div className="hidden w-full lg:w-1/4 lg:block">
            <div className="sticky w-full h-auto overflow-hidden border rounded top-8">
              <ul className="flex flex-col">
                {lists.map((list) => (
                  <Link
                    href={`/about/${list.url}`}
                    className="p-2 border-b last:border-none hover:bg-primary/40"
                  >
                    {list.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <AboutLocation />
      </Container>
    </>
  );
}
