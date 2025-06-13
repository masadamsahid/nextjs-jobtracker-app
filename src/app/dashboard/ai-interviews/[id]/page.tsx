import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import INTERVIEWS from "@/dummy-data/interviews";
import { Search } from "lucide-react";
import AIInterviewList from "./_components/AIInterviewList";
import AIInterview from "./_components/AIInterview";


type Props = {
  params: Promise<{
    id: string;
  }>;
}

const AIInterviewsPage = async ({ params }: Props) => {
  const { id: strId = '1' } = await params;
  const id = Number(strId);

  const selectedInterview = INTERVIEWS.find((interview) => interview.id === id);
  
  return (
    <div className="flex max-h-full h-full">
      {/* List */}
      <div className="w-full md:w-[360px] h-full flex flex-col">
        <div className="p-2">
          <div className="relative">
            <Input placeholder="Search" className="pl-8" />
            <Search className="size-5 stroke-1 absolute left-2 top-1/2 -translate-y-1/2 stroke-muted-foreground" />
          </div>
        </div>
        <Separator />
        <AIInterviewList
          interviews={INTERVIEWS}
          selectedInterview={selectedInterview}
        />
      </div>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Content */}
      {!selectedInterview ? "Not Found" : <AIInterview selectedInterview={selectedInterview} className="hidden md:flex flex-1" />}
    </div>
  );
}

export default AIInterviewsPage;