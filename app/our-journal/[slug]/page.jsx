import Banner from "@/app/components/ui/Banner";
import Container from "@/app/components/ui/Container";
import { fetchDataFromApi } from "@/utils/api";
import { API_URL } from "@/utils/urls";
import ReactMarkdown from "react-markdown";

const getBlog = async (slug) => {
  try {
    const { data } = await fetchDataFromApi(`/api/blogs/${slug}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);
  return {
    title: blog.attributes.name,
  };
}

export default async function Page({ params }) {
  const blog = await getBlog(params.slug);
  const title = blog.attributes.name;
  const imageUrl = blog.attributes.image.data[0].attributes.formats.medium.url;

  return (
    <>
      <Banner title={title} image={`${imageUrl}`}>
        <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl px-4 mx-auto xl:px-0">
          <h3 className="text-4xl font-bold leading-normal text-center text-background font-title">
            {title}
          </h3>
        </div>
      </Banner>
      <Container>
        <div className="max-w-4xl px-5 mx-auto prose">
          <h1 className="text-3xl font-bold">{title}</h1>
          <ReactMarkdown children={blog.attributes.description} />
        </div>
      </Container>
    </>
  );
};
