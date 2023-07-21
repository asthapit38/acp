import WFTOLogo from "@/public/images/logos/wfto.png";
import WFTOAsiaLogo from "@/public/images/logos/wfto-asia.png";
import FairTradeLogo from "@/public/images/logos/fait-trade-group-logo.jpg";
import Image from "next/image";

const AboutAffiliations = () => {
  return (
    <article className="space-y-4" id="about-affiliations">
      <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
        Affiliations
      </p>
      <div className="relative flex items-start gap-x-5">
        <Image
          src={WFTOLogo}
          width={100}
          height={100}
          alt="World fair trade Logo"
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={WFTOAsiaLogo}
          width={100}
          height={100}
          alt="World fair trade asia Logo"
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={FairTradeLogo}
          width={100}
          height={100}
          alt="Fair Trade Logo"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </article>
  );
};

export default AboutAffiliations;
