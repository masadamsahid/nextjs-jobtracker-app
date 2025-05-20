import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main>
        <Button>
          Hello World
        </Button>

        <section id="FAQs" className="p-16">
          <h2 className="font-semibold text-5xl text-center mx-auto w-fit mb-4">
            Frequently Asked Questions
          </h2>

          <div className="w-[500px] mx-auto">
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
