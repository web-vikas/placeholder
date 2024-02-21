import Image from "next/image";
import mySvg from "./image/4882404.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex item-center justify-around w-full text-center min-h-screen	">
        <div className="flex items-center justify-center flex-col w-3/12 text-center	min-h-full">
          <div className="flex gap-5 p-1 items-center justify-center ">
            <p>Hight</p>
            <input
              type="number"
              placeholder="Hight in px"
              className="p-1 rounded w-full text-black"
            />
          </div>
          <div className="flex gap-5 p-1 items-center justify-center">
            <p>Width</p>
            <input
              type="number"
              placeholder="Width in px"
              className="p-1 rounded w-full text-black"
            />
          </div>
          <button  className="border p-1.5 mt-5 rounded hover:bg-white hover:text-black">
            Submit
          </button>
        </div>
        <div className="w-3/4	flex items-center justify-center flex-col ">
          <div className="w-6/12	">
            <Image src={mySvg} alt="your image link" className="rounded" />
          </div>
          <div className="link mt-5">
            <Link href="/">Copy image url</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
