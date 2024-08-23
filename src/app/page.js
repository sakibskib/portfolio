import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
//eije eikhaney src bg
import RenderModel from "@/components/RenderModel";
// import Robotbhai from "@/components/models/robot";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
// const Wizard = dynamic(() => import("@/components/models/Wizard"), {
//   ssr: false,
// });
const Robotbhai=dynamic(()=> import("@/components/models/robot"),{
  ssr:false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
      // eikhaney background image ashtese ? kireh bhai jas nah ken
      //bg src er eita change kora lagbey
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
        //opacity changge kortey paros
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          {/* // eikhaney 3d model aschey */}
          <Robotbhai />

         
        </RenderModel>
      </div>
    </main>
  );
}
