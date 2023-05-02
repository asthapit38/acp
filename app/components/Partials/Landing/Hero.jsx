import Image from "next/image";
import Button from "@/app/components/ui/Button";

const Hero = () => {
  return (
    <div className="hero h-[calc(100vh-160px)] flex justify-center items-center relative ">
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <Image
          priority
          src="/images/hero-background.png"
          fill
          sizes="width: 100%"
          style={{
            objectFit: "cover",
          }}
          alt="hero-image"
        />
      </div>
      <div className="absolute inset-0 w-full h-full overlap bg-black/50"></div>
      <div className="relative z-20 flex flex-col max-w-lg mx-auto text-center text-background gap-y-4">
        <p className="text-4xl font-bold leading-normal font-title">
          Crafting a Better Future for Nepalese Artisans
        </p>
        <p>
          The Association for Craft Producers is a Fair Trade Organization in
          Nepal that supports low-income artisans with design, marketing, and
          technical services. They blend traditional craft with modern design
          and offer a flexible program for creative collaboration. ACP provides
          various benefits and programs for their producers' welfare and
          conservation of the environment.
        </p>
        <Button>Learn More </Button>
      </div>
    </div>
  );
};

export default Hero;
