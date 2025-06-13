"use client";
import React from "react";
import { Card } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { JobApplication } from "@/dummy-data/job-applications";
import { Company } from "@/dummy-data/companies";

type Props = {
  mode: "edit" | "add";
  selectedJobApplication?: (JobApplication & { company?: Company }) | null;
};

const JobApplicationForm = ({ mode, selectedJobApplication }: Props) => {
  return (
    <div id="company-form" className="flex flex-row-2 p-6 mt-auto">
      <Card className="p-2 w-full">
        <div className="flex flex-wrap p-2 w-full gap-4">
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label id="jobTitle">
              Job Title <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Job Title"
              required
              defaultValue={
                mode === "edit" ? selectedJobApplication?.job_title : ""
              }
            />
          </div>
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label>
              Company <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              id="company-name"
              placeholder="Company Name"
              required
              defaultValue={
                mode === "edit" ? selectedJobApplication?.company?.name : ""
              }
            />
          </div>
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label id="current-status">Current Status</Label>
            <Input
              type="text"
              placeholder="Eg. applied, interview, accepted, or rejected"
              required
              defaultValue={
                mode === "edit" ? selectedJobApplication?.status : ""
              }
            />
          </div>
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label>Job Vacancy Link</Label>
            <Input
              id="job-vacancy-link"
              type="link"
              placeholder="Eg. https://www.job-example.com/"
              defaultValue={
                mode === "edit" ? selectedJobApplication?.job_link_url : ""
              }
            />
          </div>
        </div>
        <div className="grid p-2 w-full items-center gap-4">
          <Label htmlFor="resume">Resume(pdf.)</Label>
          <Input id="company-logo" type="file" />

          <Label>Job Description</Label>
          <Textarea
            id="job-description"
            placeholder="Please include all information relevant to job description."
            defaultValue={
              mode === "edit" ? selectedJobApplication?.job_description : ""
            }
          />
        </div>
        <div></div>
        <div className="flex p-2 w-full items-center justify-between gap-4 md:mx-auto">
          <Button type="submit" variant="outline">
            Cancel
          </Button>{" "}
          <Button type="submit">Save Changes</Button>
        </div>
      </Card>
    </div>
  );
};

export default JobApplicationForm;
