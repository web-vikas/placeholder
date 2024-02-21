import Image from "next/image";
import mySvg from "./image/4882404.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <div className="sm:p-10 flex items-center justify-center w-full md:w-3/12 shadow-md m-2 rounded p-16 ">
        <div className="text-center md:m-2">
          <div className="flex gap-10 p-1 w-full">
            <label className='w-10 text-center'>Hight</label>
            <input
              type="number"
              placeholder="in px"
              className="p-1 rounded shadow-2xl border-slate-500 outline-none border md:w-24"
            />
          </div>
          <div className="flex gap-10 p-1 w-full">
            <label className='w-10 text-center'>Width</label>
            <input
              type="number"
              placeholder="in px"
              className="p-1 rounded shadow-2xl border-slate-500 outline-none border  md:w-24"
            />
          </div>
          <div className="flex gap-10 p-1 w-full">
            <label className='w-10 text-center'>Color</label>
            <input
              type="text"
              placeholder="Color"
              className="p-1 rounded shadow-2xl border-slate-500 outline-none border  md:w-24"
            />
          </div>
          <div className="flex gap-10 p-1 w-full">
            <label className='w-10 text-center'>Gradient</label>
            <input
              type="text"
              placeholder="Gradient"
              className="p-1 rounded shadow-2xl border-slate-500 outline-none border  md:w-24"
            />
          </div>
          <div className="flex gap-10 p-1 w-full">
            <label className='w-10 text-center'>Border</label>
            <input
              type="text"
              placeholder="Border"
              className="p-1 rounded shadow-2xl border-slate-500 outline-none border  md:w-24"
            />
          </div>
          <div className="flex gap-10 p-1 w-full">
            <label className='w-10 text-center'>Direction</label>
            <input
              type="text"
              placeholder="Direction"
              className="p-1 rounded shadow-2xl border-slate-500 outline-none border  md:w-24"
            />
          </div>
          <div className="flex gap-10 p-1 w-full">
            <label className='w-10 text-center'>Radius</label>
            <input
              type="text"
              placeholder="Radius"
              className="p-1 rounded shadow-2xl border-slate-500 outline-none border  md:w-24"
            />
          </div>
          <button className="border w-full p-1 mt-5 rounded-xl shadow-md hover:bg-gray-300">Submit</button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col min-h-fit md:w-9/12 shadow-md m-2 rounded ">
        <div className="flex items-center justify-center flex-col p-10">
          <div className="w-6/12  ">
            <Image src={mySvg} alt="your image link" className="rounded" />
          </div>
          <div className="link mt-5">
            <Link href="/" className="shadow-md p-2 rounded hover:bg-gray-300">
              Copy image URL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
