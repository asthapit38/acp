import Banner from "@/app/components/ui/Banner";
import OurJournalImage from "@/public/images/our-journal.jpeg";
import BlogCard from "@/app/components/ui/BlogCard";
import Container from "../components/ui/Container";

export default function OurJournal() {
  const blogs = [
    {
      title: "NGO Supporting Women",
      date: "23 Feb, 2023",
    },
    {
      title: "Styling Ideas for a Sustainable Kitchen Pantry",
      date: "23 Feb, 2023",
    },
    {
      title: "Create a Calming Bedroom Sanctuary",
      date: "23 Feb, 2023",
    },
  ];
  const title = "Our Journals";
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
        <p className="font-light leading-loose text-center">
          We've carved out a quiet corner where you can delve into sustainable
          home design inspiration and seasonal styling tips. For those seeking
          to live in a way that is considered, kind and conscious, this is the
          place for you.
        </p>
        <div className="grid justify-start grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard title={blog.title} date={blog.date} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
