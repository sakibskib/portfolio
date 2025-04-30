// "use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

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

            <p>
              I am a software engineer with a B.S. in Computer Science from the
              University of Central Oklahoma. I have hands-on experience
              building secure, scalable applications using Java, C/C++, Python,
              JavaScript, TypeScript, and React.js.
            </p>

            <p>
              I apply AI and modern tooling responsibly to enhance productivity
              and code quality. Whether integrating the OpenAI API for
              intelligent features, pairing with Cursor AI for streamlined
              development, or deploying solutions on PostgreSQL, Firebase,
              Supabase, Docker, Vercel, and Three.js, I focus on delivering performant,
              maintainable software that drives real results.
            </p>

            <h2 className="text-base font-medium">
              Projects During My Time at UCO
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Password Manager Chrome Extension:</strong> Implemented
                end-to-end encryption and secure credential storage with a
                user-centric design.
              </li>
              <li>
                <strong>AI-Powered Smart Chatbot:</strong> Developed a
                contextual support agent using the OpenAI API to enhance user
                engagement.
              </li>
              <li>
                <strong>3D Portfolio Website:</strong> Created an interactive
                WebGL showcase to highlight design and development expertise.
              </li>
            </ul>

            <h2 className="text-base font-medium">Certifications</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>CodePath Web Development</li>
              <li>CodePath Technical Interview Prep</li>
              <li>ZTM Complete Web Development</li>
            </ul>

            <p>
              I am passionate about continuous learning and committed to
              leveraging cutting-edge technologies to solve complex challenges.
              I look forward to contributing my skills and drive to a
              forward-thinking team.
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
          <img
            className="w-full h-auto"
            src="https://github-readme-stats-sakibskib.vercel.app/api/top-langs?username=sakibskib&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&show_icons=true&icon_color=FEFE5B&text_bold=false&hide=jupyter%20notebook,html,php"
            alt="github language stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats-sakibskib.vercel.app/api?username=sakibskib&theme=transparent&hide_border=true&rank_icon=github&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}"
            alt="sakibskib stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,flutter,azure,d3,ai,docker,firebase,gatsby,git,github,graphql,cpp,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,mysql,java,js,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={
              "https://github-readme-streak-stats.herokuapp.com?user=sakibskib&theme=dark&type=jpg&hide_border=true&type=jpg&background=EB545400&ring=4052DE&currStreakLabel=4052DE"
            }
            alt="streak stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/sakibskib/PassVolt-password-manager"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              // src="https://github-readme-stats-sakibskib.vercel.app/api/pin/?username=sakibskib&repo=PassVolt-password-manager"

              src="https://github-readme-stats-sakibskib.vercel.app/api/pin/?username=sakibskib&repo=PassVolt-password-manager&hide_border=true&title_color=4052DE&text_color=4052DE&icon_color=4052DE&text_bold=false&description_lines_count=2&theme=transparent"
              alt="PassVolt-password-manager github repo"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
