import Banner from "@/app/components/ui/Banner";
import OurJournalImage from "@/public/images/our-journal.jpeg";
import BlogCard from "@/app/components/ui/BlogCard";
import Container from "../components/ui/Container";
import { fetchDataFromApi } from "@/utils/api";
export const metadata = {
  title: "Our Journal | ACP",
  description: `The Association for Craft Producers (ACP) is a Fair Trade Organization based in Nepal, dedicated to empowering low-income artisans. Through design, marketing, and technical services, ACP combines traditional craft with contemporary design, fostering creative collaboration. ACP offers a flexible program, supporting artisans while prioritizing their welfare and environmental conservation. Experience the unique craftsmanship and sustainable initiatives of ACP in Nepal.`,
};
const getJournals = async () => {
  const { data } = await fetchDataFromApi("/api/blogs?populate=image");
  return data;
};

export default async function OurJournal() {
  const blogs = await getJournals();
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
          {blogs.map(
            (blog) =>
              blog.attributes.image && (
                <BlogCard
                  title={blog.attributes.name}
                  date={blog.attributes.createdAt}
                  key={blog.id}
                  imageUrl={blog.attributes.image}
                />
              )
          )}
        </div>
      </Container>
    </>
  );
}
