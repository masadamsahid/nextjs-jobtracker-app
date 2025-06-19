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
import { title } from "process";

const Profile = [
  {
    image: '/LK1.png',
    name: 'Dennis Bouvard',
    title: 'CEO',
  },
  {
    image: '/PR1.png',
    name: 'Renatus Gerard',
    title: 'Product Manager',
  },
  {
    image: '/PR2.png',
    name: 'Leslie Alexander',
    title: 'Data Scientist',
  }
];

const AboutUs = () => {
  return (
    <div>
      <main className="container mx-auto font-inter">
        <section id="about-us" className="p-6 sm:p-16 font-inter">
          <div className="about-us-container">
            {/* About Us Header */}
            <div className="about-us-header text-left font-inter">
              <div className="about-us-title text-[#16A249] font-bold text-5xl font-inter">
                <h1>Simplify Your Job Search: AI Interviews & Effortless Application</h1>
              </div>
            </div>

            {/* About Us Content */}

            <div className="content-container flex flex-row gap-[26px] mt-[91px]">
              <div className="about-us-content flex flex-col gap-[20px]">
                <div className="content-title text-[#475569] font-bold text-4xl">
                  <h1>About Jotrack</h1>
                </div>
                <div className="content-description text-sm font-normal">
                  <p>Jotrack is an innovative web application designed to simplify and optimize your job search journey. With our platform, you can track every job application from the list of companies you've applied to, right through to the specific recruitment process status—whether it's Listed, Applied, Interview, Rejected, or Accepted. All this crucial information is stored in one organized place, eliminating the hassle of manual tracking and ensuring you're always up-to-date with every opportunity.</p>
                  <br />
                  <p>We understand that the job-seeking process can be complex and time-consuming. Therefore, Jotrack offers a comprehensive solution that helps you stay focused and efficient. With clear progress visualization, you can get a broad overview of all your applications, identify opportunities that need follow-up, and manage your time more effectively to maximize your chances of success.</p>
                </div>
                <div className="content-image flex flex-col gap-[12px] justify-center items-center">
                  <img src="/gallery.png" alt="Content Image" className="w-[404px] h-[240px]"/>
                  <img src="/gallery-2.png" alt="Content Image" className="w-[404px] h-[240px]"/>
                </div>
              </div>

              <div className="about-us-content flex flex-col gap-[20px]">
                <div className="content-image flex justify-center items-center">
                  <img src="/gallery-3.png" alt="Content Image" />
                </div>

                <div className="content-title mt-[24px] font-bold text-4xl text-[#475569]">
                  <h1>Beyond Tracking: Achieving Your Goals</h1>
                </div>

                <div className="content-description text-sm font-normal">
                  <p>Our flagship feature, AI-Interview, provides realistic interview simulations powered by advanced AI chatbot technology. This feature is specifically designed to help you practice answering common and specific interview questions, receive instant feedback, and ultimately boost your confidence before facing actual interviews. This targeted practice will better prepare you, reduce anxiety, and ensure you can showcase your best potential.</p>
                  <br />
                  <p>We are committed to being your partner in achieving career success. With smart and efficient tools like integrated application tracking and AI-Interview simulations, Jotrack empowers job seekers to navigate the job market with greater confidence and strategy. Our main goal is to help you focus on what truly matters: finding and securing your dream job without unnecessary hurdles.</p>
                </div>

              </div>
            </div>

            <hr className="mt-[56px] bg-[#E5E7EB]"/>

            {/* About Us Teams */}
            <div className="about-us-teams mt-[24px]">
              <div className="teams-title ml-[16px] text-4xl font-bold text-[#475569]">
                <h1>Our Teams</h1>
              </div>

              <div className="profile-container flex flex-row justify-center items-center gap-[183px] mt-[38px]">
                {Profile.map((profile) => (
                    <div className="teams-profile flex flex-col text-center" key={profile.name}>
                      <img src={profile.image} alt="Profile Image" className="w-[140px] h-[147px]"/>
                      <p className="font-bold text-sm mt-[26px]">{profile.name}</p>
                      <p className="text-sm font-regular mt-[9px]">{profile.title}</p>
                    </div>
                ))}
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;