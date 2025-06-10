import INTERVIEWS from "@/dummy-data/interviews";
import { redirect } from "next/navigation";

type Props = {}

const AIInterviewsPage = (props: Props) => {
  const first = INTERVIEWS[0];
  return redirect(`/dashboard/ai-interviews/${first.id}`);
  return (
    <div className="">AI Interviews Page</div>
  );
}

export default AIInterviewsPage;