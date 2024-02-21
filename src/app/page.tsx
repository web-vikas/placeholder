import Image from "next/image";
import mySvg from "./image/4882404.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <div className="sm:p-10 flex items-center justify-center w-full md:w-3/12 shadow-md m-2 rounded p-16 ">
        <div className="text-center md:m-5">
          <div className="flex gap-5 p-1 w-full">
            <p>Hight</p>
            <input
              type="number"
              placeholder="Hight in px"
              className="p-1 rounded w-full shadow-md"
            />
          </div>
          <div className="flex gap-5 p-1 w-full">
            <p>Width</p>
            <input
              type="number"
              placeholder="Width in px"
              className="p-1 rounded w-full shadow-md"
            />
          </div>
          <button className="border p-1.5 mt-5 rounded">Submit</button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col min-h-fit md:w-9/12 shadow-md m-2 rounded ">
        <div className="flex items-center justify-center flex-col p-10">
          <div className="w-6/12  ">
            <Image src={mySvg} alt="your image link" className="rounded" />
          </div>
          <div className="link mt-5">
            <Link href="/" className="shadow-md p-2 rounded hover:bg-white-500">
              Copy image URL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
