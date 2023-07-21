"use client";
import DiscoverCard from "@/app/components/ui/DiscoverCard";
import OurStoryImage from "@/public/images/discover_section/story.JPG";
import OurValuesImage from "@/public/images/discover_section/our-journal.jpeg";
import ArtisanStoryImage from "@/public/images/discover_section/artisan-stry-thumb.JPG";
import Button from "@/app/components/ui/Button";
import HeadingContainer from "@/app/components/ui/Heading/HeadingContainer";
import Reveal from "../../ui/Reveal";
import Link from "next/link";

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

      <div className="grid grid-cols-12 gap-3">
        <div className="flex flex-col col-span-12 lg:col-span-4 gap-y-3">
          <Reveal>
            <DiscoverCard imageSrc={OurStoryImage} imageAlt="Our Story">
              <p className="mb-1 text-2xl fone-medium">Our Story</p>
              <Link href="/about">
                <Button>Learn More</Button>
              </Link>
            </DiscoverCard>
          </Reveal>
          <Reveal>
            <DiscoverCard imageSrc={OurValuesImage} imageAlt="Our Journal">
              <p className="mb-1 text-2xl fone-medium">Our Journal</p>
              <Link href="/our-journal">
                <Button>Learn More</Button>
              </Link>
            </DiscoverCard>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-8 ">
          <Reveal>
            <DiscoverCard imageSrc={ArtisanStoryImage} imageAlt="Our Journal">
              <p className="mb-1 text-2xl fone-medium">Our Artisan Story</p>
              <Link href="/artisan-story">
                <Button>Learn More</Button>
              </Link>
            </DiscoverCard>
          </Reveal>
        </div>
      </div> 
    </div>
  );
};

export default DiscoverAcp;
