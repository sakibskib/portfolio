import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
//eije eikhaney src bg
import RenderModel from "@/components/RenderModel";
// import Robotbhai from "@/components/models/robot";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Robotbhai=dynamic(()=> import("@/components/models/robot"),{
  ssr:false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
      
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-20"
        //opacity 
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          {/* // eikhaney 3d model aschey robot bhai jindabad */}
          <Robotbhai />

         
        </RenderModel>
      </div>
    </main>
  );
}
