import { NextRequest } from "next/server";
import Jimp from "jimp";
import { promises as fs } from "fs";

export async function GET(request: NextRequest) {
  const size = request.nextUrl.searchParams.get("size") || "600x400";
  const bg = request.nextUrl.searchParams.get("bg") || "fff";
  const color = request.nextUrl.searchParams.get("color") || "000";
  const text = request.nextUrl.searchParams.get("text");
  const width = parseInt(size.split("x")[0]);
  const height = parseInt(size.split("x")[1]);
  const fileName = "generated_image.png";
  await new Promise<void>((resolve, reject) => {
    new Jimp(width, height, `#${bg}`, async (err, image) => {
      if (err) {
        console.error("Error creating image:", err);
        reject(err);
        return;
      }
      try {
        await image.writeAsync(fileName);
        resolve();
      } catch (err) {
        console.error("Error saving image:", err);
        reject(err);
      }
    });
  });``

  const fileContent = await fs.readFile(fileName);

  return new Response(fileContent, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
}
