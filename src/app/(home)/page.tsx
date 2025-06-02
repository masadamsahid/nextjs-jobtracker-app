import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeCheck, BadgeX } from "lucide-react";
import Link from "next/link";
import Testimonial from "@/components/Testimonial";

const PLANS = [
  {
    name: "Starter Plan",
    price_name: "Free",
    desc: "Begin your journey and manage your job applications for free",
    features: [
      { isChecked: true, feature: "Track job applications up to 50 active applications" },
      { isChecked: true, feature: "Archive any tracked applications anytime" },
      { isChecked: false, feature: "Access to AI-Powered Interview Simulator" },
      { isChecked: false, feature: "Personalized suggestions" },
      { isChecked: false, feature: "CV/Resume reviews & examinations" },
    ],
  },
  {
    name: "Premium Plan",
    price_name: "IDR 50K/mo",
    desc: "Boost your journey with our premium features and land your dream job",
    features: [
      { isChecked: true, feature: "Track job applications up to 50 active applications" },
      { isChecked: true, feature: "Archive any tracked applications anytime" },
      { isChecked: true, feature: "Access to AI-Powered Interview Simulator" },
      { isChecked: true, feature: "Personalized suggestions" },
      { isChecked: true, feature: "CV/Resume reviews & examinations" },
    ],
  },
];

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

        <Testimonial/>

        <section className="p-6 sm:p-16">
          <h2 className="font-semibold text-5xl text-center mx-auto w-fit mb-4">
            Find the right plan to enhance your journey.
          </h2>

          <div className="mt-14 flex flex-col lg:flex-row gap-6 justify-center items-center">
            {PLANS.map((plan) => (
              <Card key={plan.name} className="w-[448px]">
                <CardHeader>
                  <CardDescription className="font-normal text-6xl text-foreground">
                    {plan.price_name}
                  </CardDescription>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[2lh]">
                    {plan.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-4">
                    {plan.features.map(({ isChecked, feature }) => (
                      <li key={feature} className={cn("flex items-start gap-4 text-xl font-medium", !isChecked && "text-muted-foreground")}>
                        <div className="mt-1 size-6">
                          {isChecked ? <BadgeCheck /> : <BadgeX/>}
                        </div>
                        <p className="p-0">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/login" className="w-full">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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

