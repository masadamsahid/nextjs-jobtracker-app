import { Command } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import AuthIllustration from "./_components/AuthIllustration";

type Props = {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen bg-background">
      <div id="auth-illustration" className="p-4 lg:p-8 md:h-full w-full hidden md:flex flex-col">
        <Link href="/" className="text-primary flex items-center gap-2">
          <Command />
          <span>LOGO</span>{" "}
          {/* Wrap LOGO in a span for better control, though not strictly necessary for this layout */}
        </Link>


        <div className="flex-1 flex flex-col justify-center items-center">
          <AuthIllustration/>
        </div>

        <blockquote className="border-l-2 pl-6 italic text-primary">
          &quot;This library has saved me countless hours of work and helped
          me deliver stunning designs to my clients faster than ever
          before.&quot;
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-primary">
            Sofia Davis
          </p>
        </blockquote>
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
