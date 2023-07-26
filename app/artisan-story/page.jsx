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
    <div className="max-w-5xl px-4 mx-auto mt-6 lg:px-0">
      <StorySlider stories={stories} />
    </div>
  );
}
