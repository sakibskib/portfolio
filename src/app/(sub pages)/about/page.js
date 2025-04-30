import Image from "next/image";
import bg from "../../../../public/background/about-me-bg.jpg";
import RenderModel from "@/components/RenderModel";
import portrait from "../../../../public/images/portrait.png";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import { Computer } from "lucide-react";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});
const ComputerModel = dynamic(() => import("@/components/models/Pi"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <ComputerModel />
        </RenderModel>
      </div>
         

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            SK Sakib
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the wizard behind this portfolio
          </p>
        </div>
          
      </div>
      {/*  — portrait under the computer model — */}
     <div className="relative z-10 mt-8 flex justify-center">
       <Image
     src={portrait}
         alt="SK Sakib portrait"
         width={480}
         height={480}
         priority
         className="rounded-full border-4 border-accent object-cover"
       />
     </div>

      <AboutDetails />
    </>
  );
}
