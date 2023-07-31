import { fetchDataFromApi } from "@/utils/api";
import StorySlider from "./components/StorySlider";

const getStories = async () => {
  const { data } = await fetchDataFromApi("/api/stories");
  return data;
};

export const metadata = {
  title: "Artisan Story | ACP",
};

export default async function ArtisanStory() {
  const stories = await getStories();
  return (
    <div className=" bg-story-bg bg-cover bg-no-repeat bg-[40vw_0] min-h-[45vh] -mb-16">
      {" "}
      <StorySlider stories={stories} />{" "}
    </div>
  );
}
