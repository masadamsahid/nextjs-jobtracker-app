// profile/page.tsx
import ProfileForm from "./_components/ProfileForm"; // Impor ProfileForm
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"



export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 justify-center p-24">
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
      <Separator className="w-2/3"/>

      <ProfileForm /> {/* Render ProfileForm */}
    </div>
  );
}