import Image from "next/image";
import bg from "../../../../public/background/contact-bg.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="SK Sakib Portfolio website/s contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Hi there! I&apos;m SK Sakib, a software developer working at the 
          intersection of higher-education systems and full-stack 
          engineering. I build and maintain the platforms behind degree 
          audits and transfer articulation for 14,000+ students, and I 
          spend my own time on projects that push into AI — semantic 
          search, vector embeddings, and pipelines that turn messy data 
          into something usable.
          <br/>
          <br/>
          <br/>
           I&apos;m interested in application analyst roles, full-stack work, 
          and anything that sits between complex institutional data and 
          the people who depend on it. If you&apos;re hiring, building 
          something interesting, or just want to talk shop, drop me an 
          email or connect on LinkedIn.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
