"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Company } from "@/dummy-data/companies";

type Props = {
  mode: "add" | "edit";
  selectedCompany?: Company;
};

const CompanyForm = ({ mode, selectedCompany }: Props) => {
  return (
    <div id="company-form" className="flex flex-row-2 p-8 mt-auto">
      <Card className="p-6 w-full">
        <div className="flex flex-wrap p-2 w-full gap-4">
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label id="companyName">Company Name</Label>
            <Input
              type="text"
              placeholder="Eg. Google, Microsoft, Amazon, etc"
              required
              defaultValue={mode === "edit" ? selectedCompany?.name : ""}
            />
          </div>
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label>Location</Label>
            <Input
              type="text"
              id="company-location"
              placeholder="Eg. Jakarta, ID; Singapore, SG; etc"
              required
              defaultValue={mode === "edit" ? selectedCompany?.location : ""}
            />
          </div>
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label id="company-industry">Industry</Label>
            <Input
              type="text"
              id="company-location"
              placeholder="Eg. Technology, Finance, Healthcare; etc"
              required
              defaultValue={mode === "edit" ? selectedCompany?.category : ""}
            />
          </div>
          <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
            <Label>Website</Label>
            <Input
              id="company-website"
              type="link"
              placeholder="Eg. https://www.my-company.com"
              required
              defaultValue={mode === "edit" ? selectedCompany?.url_link : ""}
            />
          </div>
        </div>
        <div className="grid p-2 w-full items-center gap-4">
          <Label htmlFor="company-logo">Company Logo</Label>
          <Input id="company-logo" type="file" />
          <Label htmlFor="company-galery">Company Galery</Label>
          <Input id="company-galery" type="file" />
          <Label>Company Description</Label>
          <Textarea
            id="company-desc"
            placeholder="Type your message here."
            defaultValue={mode === "edit" ? selectedCompany?.desc : ""}
          />
        </div>
        <div></div>
        <div className="flex p-2 w-full items-center justify-between gap-2 md:mx-auto">
          <Button type="submit" variant="outline">
            Cancel
          </Button>{" "}
          <Button type="submit" className="bg-primary">Submit</Button>
        </div>
      </Card>
    </div>
  );
};
export default CompanyForm;
