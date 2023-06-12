import Banner from "@/app/components/ui/Banner";
import Container from "@/app/components/ui/Container";
import OurJournalImage from "@/public/images/discover_section/artisan-story.jpeg";
const page = () => {
  const title = "My blog title";
  return (
    <>
      <Banner title={title} image={OurJournalImage}>
        <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl px-4 mx-auto xl:px-0">
          <h3 className="text-4xl font-bold leading-normal text-background font-title">
            {title}
          </h3>
        </div>
      </Banner>
      <Container>
        <h1 className="text-3xl font-bold">{title}</h1>
      </Container>
    </>
  );
};

export default page;
