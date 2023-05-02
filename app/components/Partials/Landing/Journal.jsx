import HeadingContainer from "@/app/components/ui/Heading/HeadingContainer";
import BlogCard from "@/app/components/ui/BlogCard";

const Journal = () => {
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
      <div className="grid justify-start grid-cols-3 gap-x-6">
        {blogs.map((blog, index) => (
          <BlogCard title={blog.title} date={blog.date} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Journal;
