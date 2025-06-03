import { Card } from "@/components/ui/card";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

type Props = {
  children: React.ReactNode;
};

const CompanyEditPage = ({ children }: Props) => {
  return (
    <div>
      <div
        id="illustration"
        className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center"
      >
        <div className="justify-self-center md:justify-self-end lg:justify-self-end">
          <div className="w-[160px] h-[160px] md:w-[213px] md:h-[213px]">
            <img src="/building-bro-1.png" alt="illustration" />
          </div>
        </div>
        <div className="col-span-2 text-center md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Let's improve
            <span className="text-green-500"> about</span> this
            <span className="text-green-500"> company</span>
          </h1>
        </div>
      </div>

      <div id="company-form" className="flex flex-row-2 p-2 mt-auto">
        <Card className="p-2 w-full">
          <div className="flex flex-wrap p-2 w-full gap-1.5">
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label id="companyName">Company Name</Label>
              <Input
                type="text"
                placeholder="Eg. Google, Microsoft, Amazon, etc"
                required
              />
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label>Location</Label>
              <Input
                type="text"
                id="company-location"
                placeholder="Eg. Jakarta, ID; Singapore, SG; etc"
                required
              />
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label id="company-industry">Industry</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)] flex-grow">
              <Label>Website</Label>
              <Input
                id="company-website"
                type="link"
                placeholder="Eg. https://www.my-company.com"
                required
              />
            </div>
          </div>
          <div className="grid p-2 w-full items-center gap-2">
            <Label htmlFor="company-logo">Company Logo</Label>
            <Input id="company-logo" type="file" />
            <Label htmlFor="company-galery">Company Galery</Label>
            <Input id="company-galery" type="file" />
            <Label>Company Description</Label>
            <Textarea id="company-desc" placeholder="Type your message here." />
          </div>
          <div></div>
          <div className="flex p-2 w-full items-center justify-between gap-2 md:mx-auto">
            <Button type="submit" variant="outline">
              Cancel
            </Button>{" "}
            <Button type="submit">Submit</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CompanyEditPage;
