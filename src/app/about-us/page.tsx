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
            <div className="about-us-header text-left">
              <div className="about-us-title text-[#16A249] font-bold text-5xl">
                <h1>Simplify Your Job Search: AI Interviews & Effortless Application</h1>
              </div>
            </div>

            <div className="content-container flex flex-row gap-[26px] mt-[91px]">
              <div className="about-us-content">
                <div className="content-title">
                  <h1>About Jotrack</h1>
                </div>
                <div className="content-description">
                  <p>Jotrack is an innovative web application designed to simplify and optimize your job search journey. With our platform, you can track every job application from the list of companies you've applied to, right through to the specific recruitment process status—whether it's Listed, Applied, Interview, Rejected, or Accepted. All this crucial information is stored in one organized place, eliminating the hassle of manual tracking and ensuring you're always up-to-date with every opportunity.</p>
                  <br />
                  <p>We understand that the job-seeking process can be complex and time-consuming. Therefore, Jotrack offers a comprehensive solution that helps you stay focused and efficient. With clear progress visualization, you can get a broad overview of all your applications, identify opportunities that need follow-up, and manage your time more effectively to maximize your chances of success.</p>
                </div>
                <div className="content-image">
                  <img src="/gallery.png" alt="Content Image" />
                  <img src="/gallery-2.png" alt="Content Image" />
                </div>
              </div>

              <div className="about-us-content">
                <div className="content-image">
                  <img src="/gallery-3.png" alt="Content Image" />
                </div>

                <div className="content-title">
                  <h1>Beyond Tracking: Achieving Your Goals</h1>
                </div>
                
                <div className="content-description">
                  <p>Our flagship feature, AI-Interview, provides realistic interview simulations powered by advanced AI chatbot technology. This feature is specifically designed to help you practice answering common and specific interview questions, receive instant feedback, and ultimately boost your confidence before facing actual interviews. This targeted practice will better prepare you, reduce anxiety, and ensure you can showcase your best potential.</p>
                  <br />
                  <p>We are committed to being your partner in achieving career success. With smart and efficient tools like integrated application tracking and AI-Interview simulations, Jotrack empowers job seekers to navigate the job market with greater confidence and strategy. Our main goal is to help you focus on what truly matters: finding and securing your dream job without unnecessary hurdles.</p>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;