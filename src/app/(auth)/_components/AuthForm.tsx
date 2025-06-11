import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type Props = {
  formMode?: "register" | "login"
}

const AuthForm = ({ formMode = "register" }: Props) => {
  return (
    <form className="flex flex-col gap-2 w-full">
      {formMode === "register" && (
        <Input
          type="text"
          name="name"
          placeholder="full name"
          className="bg-background"
        />
      )}
      <Input
        type="email"
        name="email"
        placeholder="name@example.com"
        className="bg-background"
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        className="bg-background"
      />
      {formMode === "register" && (
        <Input
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          className="bg-background"
        />
      )}
      <Button asChild>
        <Link href="/dashboard">
          {formMode === "register" ? "Create Account" : "Login with Email"}
        </Link>
      </Button>
    </form>
  );
}

export default AuthForm;