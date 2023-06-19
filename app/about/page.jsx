import Banner from "@/app/components/ui/Banner";
import Container from "@/app/components/ui/Container";
import AboutSkill from "./components/skill";
import AboutFairTradePriciple from "./components/fairTradePrinciple";
import AboutCommitments from "./components/commitmentsEfficiency";
import AboutImpact from "./components/impact";
import AboutGrowth from "./components/growth";
import AboutEstablishment from "./components/establishment";
import AboutMission from "./components/mission";
import AboutCommitmentsEfficiency from "./components/commitmentsEfficiency";
import AboutLocation from "./components/locations";
import AboutRespect from "./components/respect";
import AboutAffiliations from "./components/affilations";
import AboutIntro from "./components/intro";

export default function About() {
  const title = "Discover Our Story: Who We Are and What We Stand For";
  return (
    <>
      <Banner title={title} image="/images/about-banner.JPG">
        <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl px-4 mx-auto xl:px-0">
          <h3 className="text-4xl font-bold leading-normal text-background font-title">
            {title}
          </h3>
        </div>
      </Banner>
      <Container>
        <AboutIntro />
        <AboutMission />
        <AboutEstablishment />
        <AboutGrowth />
        <AboutImpact />
        <AboutSkill />
        <AboutCommitments />
        <AboutFairTradePriciple />
        <AboutCommitmentsEfficiency />
        <AboutRespect />
        <AboutAffiliations />
        <AboutLocation />
      </Container>
    </>
  );
}
