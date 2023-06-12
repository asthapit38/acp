"use client";
import DiscoverCard from "@/app/components/ui/DiscoverCard";
import OurStoryImage from "@/public/images/discover_section/image-one.jpeg";
import OurValuesImage from "@/public/images/discover_section/our-values.jpeg";
import ArtisanStoryImage from "@/public/images/discover_section/artisan-story.jpeg";
import Button from "@/app/components/ui/Button";
import HeadingContainer from "@/app/components/ui/Heading/HeadingContainer";
import Reveal from "../../ui/Reveal";

const DiscoverAcp = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <Reveal>
        <HeadingContainer title="Discover ACP">
          The Association for Craft Producers is a Fair Trade Organization in
          Nepal that supports low-income artisans with design, marketing, and
          technical services. They blend traditional craft with modern design
          and offer a flexible program for creative collaboration. ACP provides
          various benefits and programs for their producers' welfare and
          conservation of the environment.
        </HeadingContainer>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-12 gap-3">
          <div className="flex flex-col col-span-12 lg:col-span-4 gap-y-3">
            <DiscoverCard imageSrc={OurStoryImage} imageAlt="Our Story">
              <p className="mb-1 text-2xl fone-medium">Our Story</p>
              <Button>Learn More</Button>
            </DiscoverCard>
            <DiscoverCard imageSrc={OurValuesImage} imageAlt="Our Journal">
              <p className="mb-1 text-2xl fone-medium">Our Journal</p>
              <Button>Learn More</Button>
            </DiscoverCard>
          </div>
          <div className="col-span-12 lg:col-span-8 ">
            <DiscoverCard imageSrc={ArtisanStoryImage} imageAlt="Our Journal">
              <p className="mb-1 text-2xl fone-medium">Our Artisan Story</p>
              <Button>Learn More</Button>
            </DiscoverCard>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default DiscoverAcp;
