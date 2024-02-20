import { NextRequest } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: NextRequest) {
  let url = `http://localhost:3000/callback${request.nextUrl.search}`;

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
