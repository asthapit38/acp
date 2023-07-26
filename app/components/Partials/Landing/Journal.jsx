import HeadingContainer from "@/app/components/ui/Heading/HeadingContainer";
import BlogCard from "@/app/components/ui/BlogCard";
import { fetchDataFromApi } from "@/utils/api";

const getJournals = async () => {
  const { data } = await fetchDataFromApi("/api/blogs?populate=image");
  return data;
};

const Journal = async () => {
  const blogs = await getJournals();
  return (
    <div className="flex flex-col gap-y-8">
      <HeadingContainer title="Our Journal">
        The Association for Craft Producers is a Fair Trade Organization in
        Nepal that supports low-income artisans with design, marketing, and
        technical services. They blend traditional craft with modern design and
        offer a flexible program for creative collaboration. ACP provides
        various benefits and programs for their producers' welfare and
        conservation of the environment.
      </HeadingContainer>
      <div className="grid justify-start grid-cols-1 gap-6 lg:grid-cols-3">
        {blogs &&
          blogs.map(
            (blog) =>
              blog.attributes.image && (
                <BlogCard
                  title={blog.attributes.name}
                  date={blog.attributes.createdAt}
                  key={blog.id}
                  imageUrl={blog.attributes.image_url}
                  slug={blog.attributes.slug}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Journal;
