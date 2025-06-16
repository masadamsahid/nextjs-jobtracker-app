// profile/_components/TextAreaForm/page.tsx
"use client";

import { useFormContext } from "react-hook-form"; // Menggunakan useFormContext
import { z } from "zod";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

// Definisi schema untuk bio saja
export const bioSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.", // Perbaiki typo: 30 menjadi 160
    }),
});

export default function TextAreaForm() {
  const form = useFormContext(); // Dapatkan instance form dari FormProvider

  return (
    <FormField
      control={form.control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us a little bit about yourself"
              className="resize-none"
              {...field}
            />
          </FormControl>
          {/* <FormDescription>
            You can <span>@mention</span> other users and organizations.
          </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}