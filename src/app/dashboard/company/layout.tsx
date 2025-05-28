import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { FileInput } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const CompanyLayout = ({ children }: Props) => {
  return (
    <div>
      <div id="illustration">
        {/* Content Illustration */}
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

export default CompanyLayout;
