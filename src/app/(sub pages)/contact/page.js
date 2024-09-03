import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="SK Sakib Portfolio website's contact page background image"
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
          Hi there! I'm SK Sakib, a computer science enthusiast with a knack for code, collaboration, and creation. Immersed in the world of software architecture, web innovation, and machine learning, I thrive on turning complex problems into elegantly crafted solutions.
          <br/>
            Let's forge new connections! Feel free to drop me an email or connect on LinkedIn. Whether you're brimming with internship offers, job prospects, learning opportunities, or just need a tech-savvy problem-solver, I'd love to hear from you. Also, reach out to me if you believe I can help you somehow.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
