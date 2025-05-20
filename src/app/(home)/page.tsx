import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto">
        <Button>
          Hello World
        </Button>
        
        <section id="hero" className="p-6 sm:p-16">
          <div className="flex items-center justify-center gap-6 md:gap-4 lg:gap-8 flex-col md:flex-row">
            <img
              className="hero-image w-full md:w-2/3 lg:max-w-[620px] "
              src="/hero.png"
              alt="Hero Image"
            />
            <div className="hero-desc text-center md:text-left flex flex-col justify-center gap-4 md:gap-6 md:w-[400px]">
              <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-primary">
                Jotrack
              </h1>
              <h2 className="hero-subtitle text-lg md:text-xl lg:text-2xl">
                Simplify Your Job Search: AI Interviews & Effortless Application
              </h2>
              <Button asChild className="md:mr-auto ml-0">
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>


        <section id="FAQs" className="p-6 sm:p-16">
          <h2 className="font-semibold text-5xl text-center mx-auto w-fit mb-4">
            Frequently Asked Questions
          </h2>

          <div className="max-w-[500px] mx-auto">
            <Accordion collapsible type="single" defaultValue="faq-1">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Is it free?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet id similique deleniti nesciunt neque minus quasi quos dolor tenetur esse, provident ullam! Earum, aliquid.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore.</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet id similique deleniti nesciunt neque minus quasi quos dolor tenetur esse, provident ullam! Earum, aliquid.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing.</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet id similique deleniti nesciunt neque minus quasi quos dolor tenetur esse, provident ullam! Earum, aliquid.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}

