// "use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          {/* <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p> */}
          <div className="font-light text-xs sm:text-sm md:text-base space-y-4">
            <h1 className="text-lg font-semibold">Hello, world!</h1>
            <br/>
            <p>
              I&apos;m a software developer at the University of Central Oklahoma, 
              where I build and maintain the systems behind degree audits, 
              curriculum programming, and transfer credit processing for more 
              than 14,000 students. Day to day that means Scribe-based 
              curriculum logic in DegreeWorks, SQL data solutions, and working 
              with academic departments to keep audits accurate as catalogs 
              change.
            </p>
            <br/>
              
            <br/>
            
            <p>
              Outside of that work — and often alongside it — I build 
              full-stack applications and AI tooling. I hold a B.S. in Computer 
              Science from UCO, and I work across C#/.NET, Python, JavaScript, 
              TypeScript, React, and Next.js, with PostgreSQL, Supabase, 
              Docker, and Three.js in the mix.

            </p>
            <br/>
            <br/>
            <h2 className="text-base font-medium">
              Selected Projects
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>AI Semantic Course Equivalency Engine:</strong> A semantic matching 
                  system that automates transfer course equivalency across a 
                  3,300+ course catalog, using sentence-transformer embeddings 
                  and cosine similarity to rank matches with confidence scores. 
                  Built on a Python ETL pipeline that normalizes 34 nested JSON 
                  catalog files.
              </li>
              <li>
                <strong> PassVolt — Password Manager:</strong> A secure cross-platform password 
                  manager built with C# (.NET), PostgreSQL, and client-side 
                  encryption, available as both a Chrome extension and desktop app.
              </li>
              <li>
                <strong>3D Portfolio Website:</strong> This site — an interactive WebGL showcase 
                  built with Next.js, Three.js, and Framer Motion.
              </li>
            </ul>

            <h2 className="text-base font-medium">Certifications</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>CodePath: Applied AI Engineer</li>
              <li>CodePath: Cybersecurity</li>
              <li>CodePath: Web Development</li>
            </ul>

            <p>
              I&apos;m drawn to problems where messy institutional data meets 
              software that people actually have to use. If that sounds like 
              something you&apos;re working on, I&apos;d like to hear about it.
            </p>
          </div>
        </ItemLayout>
        {/* experience commented out */}
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4{" "}
            <sub className="font-semibold text-base">times dean honor roll</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            className="w-full h-auto"
            src="https://github-readme-stats-sakibskib.vercel.app/api/top-langs?username=sakibskib&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&show_icons=true&icon_color=FEFE5B&text_bold=false&hide=jupyter%20notebook,html,php"
            alt="github language stats"
            width={400}
            height={200}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Image
            className="w-full h-auto"
            src="https://github-readme-stats-sakibskib.vercel.app/api?username=sakibskib&theme=transparent&hide_border=true&rank_icon=github&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="sakibskib stats"
            width={800}
            height={300}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,flutter,azure,d3,ai,docker,firebase,gatsby,git,github,graphql,cpp,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,mysql,java,js,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Skills Icons I use"
            width={1200}
            height={120}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            className="w-full h-auto"
            src={
              "https://github-readme-streak-stats.herokuapp.com?user=sakibskib&theme=dark&type=jpg&hide_border=true&type=jpg&background=EB545400&ring=4052DE&currStreakLabel=4052DE"
            }
            alt="streak stats"
            width={800}
            height={200}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/sakibskib/PassVolt-password-manager"
            target="_blank"
            className="w-full"
          >
            <Image
              className="w-full h-auto"
              // src="https://github-readme-stats-sakibskib.vercel.app/api/pin/?username=sakibskib&repo=PassVolt-password-manager"
              src="https://github-readme-stats-sakibskib.vercel.app/api/pin/?username=sakibskib&repo=PassVolt-password-manager&hide_border=true&title_color=4052DE&text_color=4052DE&icon_color=4052DE&text_bold=false&description_lines_count=2&theme=transparent"
              alt="PassVolt-password-manager github repo"
              width={800}
              height={200}
              unoptimized
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
