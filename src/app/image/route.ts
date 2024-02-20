import { NextRequest } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: NextRequest) {
  const sizeParam = request.nextUrl.searchParams.get("size");
  const bgParam = request.nextUrl.searchParams.get("bg");
  const colorParam = request.nextUrl.searchParams.get("color");
  const textParam = request.nextUrl.searchParams.get("text");

  let url = "https://pholder.vercel.app/callback?";

  if (sizeParam) {
    url += `size=${sizeParam}&`;
  }

  if (bgParam) {
    url += `bg=${bgParam}&`;
  }

  if (colorParam) {
    url += `color=${colorParam}&`;
  }

  if (textParam) {
    url += `text=${textParam}&`;
  }

  // Remove the trailing '&' if any parameters were added
  url = url.slice(0, -1);
  async function takeScreenshot(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Wait for the .screenshot element to be visible
    const element = await page.waitForSelector(".screenshot");

    if (element) {
      // Get the bounding box of the .screenshot element
      const boundingBox = await element.boundingBox();

      if (boundingBox) {
        // Take a screenshot of the specified area
        const screenshot = await page.screenshot({ clip: boundingBox });
        console.log("Screenshot taken successfully.");
        return screenshot; // Return the image buffer
      } else {
        console.error("Error: Unable to get bounding box of element.");
      }
    } else {
      console.error("Error: Element not found.");
    }

    await browser.close();
    return null;
  }

  const screenshot = await takeScreenshot(url);

  if (screenshot) {
    return new Response(screenshot, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } else {
    return new Response("Error taking screenshot", { status: 500 });
  }
}
