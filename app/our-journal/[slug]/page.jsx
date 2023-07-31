import Banner from "@/app/components/ui/Banner";
import Container from "@/app/components/ui/Container";
import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
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
  const imageUrl = blog.attributes.image_url;
  return (
    <>
      <Container>
        <h3 className="text-4xl font-bold leading-normal text-center text-primary font-title">
          {title}
        </h3>
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="width: 100%"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="max-w-4xl px-5 mx-auto prose text-gray-800">
          <ReactMarkdown children={blog.attributes.description} />
        </div>
      </Container>
    </>
  );
}
