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
        alt="Next.js Portfolio website's contact page background image"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur fermentum neque. Integer pretium sed diam et semper. Nam porttitor dui nisl, sodales pretium nisi venenatis volutpat. Aliquam aliquam aliquam ante at convallis. Sed a enim vitae nunc sagittis eleifend. Phasellus vehicula lobortis velit sit amet euismod. Morbi tempor dignissim libero, a porta ex facilisis at. Proin sagittis, nibh ut lacinia faucibus, mauris lacus convallis quam, id auctor dolor dolor quis velit. Cras lobortis dolor a elementum semper.

Donec non metus in est tincidunt efficitur quis at lectus. Mauris ullamcorper vel tortor vel facilisis. Suspendisse pharetra erat lacus, id fermentum.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
