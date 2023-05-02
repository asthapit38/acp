import Button from "./Button";

const BlogCard = ({ title, date }) => {
  return (
    <div className="flex flex-col justify-center overflow-hidden transition-all duration-150 ease-in rounded-md hover:shadow-lg">
      <div className="w-full bg-gray-200 rounded-md aspect-square"></div>
      <div className="flex flex-col p-2 mt-4 text-center card-content gap-y-2">
        <p className="text-sm font-bold tracking-wider text-gray-700">{date}</p>
        <p className="font-bold">{title}</p>
        <Button intent="secondary" size="small">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
