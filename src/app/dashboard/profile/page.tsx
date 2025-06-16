import React from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import TextAreaForm from "./_components/TextAreaForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-8 justify-center w-full gap-2">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h3>Budi Bedu Beda</h3>
          <p>budibedubeda@gmail.com</p>
        </div>
      </div>
      <Separator className="w-1/2" />

      <TextAreaForm />

      <div className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col w-full gap-2 ">
          <Label>Website</Label>
          <Input
            type="link"
            id="website"
            placeholder="Company Name"
            required
            defaultValue="www.my-website.com"
          />
          <Label>Social Media</Label>
          <Input
            id="company-website"
            type="link"
            placeholder="Eg. https://www.instagram.com"
            required
            defaultValue=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
