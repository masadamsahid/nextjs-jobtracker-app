import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeCheck, BadgeX } from "lucide-react";
import Link from "next/link";
import Testimonial from "@/components/Testimonial";
import Achievement from "@/components/Achievement";

const AboutUs = () => {
  return (
    <div>
      <main className="container mx-auto">
        <section id="about-us" className="p-6 sm:p-16">
          <div className="about-us-container">
            <div className="about-us-header">
              <div className="about-us-title">
                <h1>Simplify Your Job Search: AI Interviews & Effortless Application</h1>
              </div>
            </div>

            <div className="about-us-content">
              <div className="content-title">
                <h1>About Jotrack</h1>
              </div>
              <div className="content-description">
                <p>Jotrack is an innovative web application designed to simplify and optimize your job search journey. With our platform, you can track every job application from the list of companies you've applied to, right through to the specific recruitment process status—whether it's Listed, Applied, Interview, Rejected, or Accepted. All this crucial information is stored in one organized place, eliminating the hassle of manual tracking and ensuring you're always up-to-date with every opportunity.</p>
                <p>We understand that the job-seeking process can be complex and time-consuming. Therefore, Jotrack offers a comprehensive solution that helps you stay focused and efficient. With clear progress visualization, you can get a broad overview of all your applications, identify opportunities that need follow-up, and manage your time more effectively to maximize your chances of success.</p>
              </div>
              <div className="content-image">
                <img src="/gallery.png" alt="Content Image" />
                <img src="/gallery-2.png" alt="Content Image" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;