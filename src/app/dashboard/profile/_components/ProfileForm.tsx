"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form"; // Import FormProvider
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Import Form dan FormLabel
import { Input } from "@/components/ui/input"; // Import Input

import TextAreaForm, { bioSchema } from "./TextAreaForm"; // Impor TextAreaForm dan bioSchema

// Definisikan schema untuk ProfileForm
const ProfileFormSchema = z.object({
  ...bioSchema.shape, // Gabungkan schema bio
  email: z.string().email({ message: "Please enter a valid email address." }),
  website: z
    .string()
    .url({ message: "Invalid URL" })
    .optional()
    .or(z.literal("")),
  linkedIn: z
    .string()
    .url({ message: "Invalid URL" })
    .optional()
    .or(z.literal("")),
});

// Definisikan tipe untuk props ProfileForm
interface ProfileFormProps {
  mode: "add" | "edit";
}

export default function ProfileForm() {
  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      bio: "I'm a frontend developer with a passion for building beautiful and user-friendly web applications. In my free time, I enjoy exploring new technologies and contributing to open-source projects.",
      email: "your.email@example.com",
      website: "http://www.my-website.com", // Default value sesuai permintaan
      linkedIn: "https://www.linkedin.com/in/username/",
    },
  });

  function onSubmit(data: z.infer<typeof ProfileFormSchema>) {
    toast("Profile updated successfully!", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <FormProvider {...form}>
      {" "}
      {/* Sediakan form context */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <TextAreaForm /> {/* Render TextAreaForm */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <div className="flex flex-col w-full gap-4 ">
              <FormLabel htmlFor="website">Website</FormLabel>
              <Input
                type="url" // Ubah ke "url" untuk validasi yang lebih baik
                id="website"
                placeholder="Website Project" // Ubah placeholder agar lebih relevan
                {...form.register("website")} // Daftarkan input ke react-hook-form
              />
              {form.formState.errors.website && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.website.message}
                </p>
              )}

              <FormLabel htmlFor="linkedIn">LinkedIn</FormLabel>
              <Input
                id="linkedIn"
                type="url" // Ubah ke "url"
                placeholder="Eg. https://www.instagram.com"
                {...form.register("linkedIn")} // Daftarkan input ke react-hook-form
              />
              {form.formState.errors.linkedIn && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.linkedIn.message}
                </p>
              )}
            </div>
            

          <Button type="submit">Update Profile</Button>{" "}
          {/* Tombol "Update Profile" */}
        </form>
      </Form>
    </FormProvider>
  );
}
