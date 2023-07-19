const getCat = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  console.log(res);
};

const Page = async () => {
  const response = await getCat();
  return <p>{JSON.stringify(response)}</p>;
};

export default Page;
