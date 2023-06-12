import path from "path";
import { promises as fs } from "fs";
export async function GET(request) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/categories.json",
    "utf8"
  );
  return new Response(fileContents);
}
// export default async function handler(req, res) {
//   const jsonDirectory = path.join(process.cwd(), "data");
//   const fileContents = await fs.readFile(
//     jsonDirectory + "/categories.json",
//     "utf8"
//   );
//   return new Response("Hello, Next.js!");
//   res.status(200).json(fileContents);
// }
