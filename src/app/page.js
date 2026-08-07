import Image from "next/image";
import Link from "next/link";
import bg from "../../public/background/home-background.jpg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";

const Robotbhai = dynamic(() => import("@/components/models/robot"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 h-full w-full object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 -z-40 bg-[radial-gradient(circle_at_top_left,rgba(64,83,222,0.24),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_38%)]" />

      <div className="relative min-h-screen">
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-x-6 top-24 z-10 flex justify-between text-[0.65rem] uppercase tracking-[0.35em] text-muted sm:inset-x-10 lg:inset-x-16">
            <span>Portfolio</span>
            <span>Sheikh &quot;SK&quot; Sakib</span>
          </div>

          <div className="relative z-10 grid w-full gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <section className="max-w-2xl pt-16 lg:pt-0">
              <div className="mb-5 inline-flex min-w-max whitespace-nowrap rounded-full border border-accent/30 bg-black/25 px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-accent backdrop-blur-md sm:text-xs sm:tracking-[0.35em]">
                Student Systems Specialist | Full-Stack Developer
              </div>
              <h1 className="max-w-xl text-4xl font-black leading-[0.95] text-white sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                I build and maintain the systems students depend on.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-7 text-foreground/80 sm:text-base lg:text-lg">
                I design and build systems that turn complex institutional data 
                into clear, reliable tools, from SQL and ETL pipelines to modern 
                web interfaces.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  View projects
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Contact me
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                <div>
                  <div className="text-2xl font-bold text-white">3D</div>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                    motion-first
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">UX</div>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                    clear flow
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Fast</div>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                    responsive build
                  </p>
                </div>
              </div>
            </section>

            <section className="relative z-30 h-[68vh] min-h-[520px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#05070d] shadow-[0_0_120px_rgba(0,0,0,0.55)] lg:h-[78vh]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,83,222,0.12),transparent_55%)]" />
              <div className="relative z-20 h-full w-full">
                <RenderModel>
                  <Robotbhai />
                </RenderModel>
              </div>
              <Navigation showOrbit={true} showToggle={false} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
