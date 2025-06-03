
import {
  Card
} from "@/components/ui/card";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

type Props = {
  children: React.ReactNode;
};

const EditJobApplication = ({ children }: Props) => {
  return (
    <div>
      <div
        id="illustration"
        className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center"
      >
        <div className="justify-self-center md:justify-self-end lg:justify-self-end">
          <div className="w-[160px] h-[160px] md:w-[213px] md:h-[213px]">
            <img src="/To do list-bro 1.png" alt="illustration" />
          </div>
        </div>
        <div className="col-span-2 text-center md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Let's
            <span className="text-green-500"> fix</span> it!
          </h1>
        </div>
      </div>

      <div id="company-form" className="flex flex-row-2 p-2 mt-auto">
        <Card className="p-2 w-full">
          <div className="flex flex-wrap p-2 w-full gap-1.5">
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label id="companyName">Job Title <span className="text-red-600">*</span></Label>
              <Input
                type="text"
                placeholder="Job Title"
                required
              />
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label>Company <span className="text-red-600">*</span></Label>
              <Input
                type="text"
                id="company-name"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label id="current-status">Current Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="applied">Applied</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label>Job Vacancy Link</Label>
              <Input
                id="job-vacancy-link"
                type="link"
                placeholder="Eg. https://www.job-example.com/"
                
              />
            </div>
          </div>
          <div className="grid p-2 w-full items-center gap-2">
            <Label htmlFor="resume">Resume(pdf.)</Label>
            <Input id="company-logo" type="file" />
            
            <Label>Job Description</Label>
            <Textarea id="job-description" placeholder="Please include all information relevant to job description." />
          </div>
          <div></div>
          <div className="flex p-2 w-full items-center justify-between gap-2 md:mx-auto">
            <Button type="submit" variant="outline">
              Cancel
            </Button>{" "}
            <Button type="submit">Save Changes</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditJobApplication;
