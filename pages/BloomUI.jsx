import React from "react";
import image from "../public/assets/projects/componnet-lib.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const BloomUI = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1 " alt="/" fill src={image} />
        <div className="top-[70%] absolute max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Bloom UI</h2>
          <h3>Component Library</h3>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="uppercase tracking-wider text-[#5]">Project</p>
          <h2>Overview</h2>
          <p className="pb-2">
            Bloom UI is a component library that provides developers with simple
            ready-made, customizable, and accessible components.
          </p>
          <p className="pb-2">
            Components:Alerts, Avatar , Badge , Button, Card , Image , Lists ,
            Modal , Navigation, Rating, Slider , Toast etc
          </p>
          <button className="px-8 py-2 mr-8">
            <a
              target="_blank"
              href="https://bloom-component-library.vercel.app/"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2">
            <a
              target="_blank"
              href="https://github.com/shristabaruah/Bloom-UI--Component-Library"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Font Awesome
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default BloomUI;
