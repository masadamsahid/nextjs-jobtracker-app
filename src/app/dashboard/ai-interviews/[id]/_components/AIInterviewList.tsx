"use client";

import CompanyDetails from "@/app/dashboard/companies/_components/CompanyDetails";
import { DrawerTitle } from "@/components/ui/drawer";
import COMPANIES from "@/dummy-data/companies";
import INTERVIEWS, { Interview } from "@/dummy-data/interviews";
import JOB_APPLICATIONS from "@/dummy-data/job-applications";
import { cn } from "@/lib/utils";
import useGlobalDrawer from "@/stores/global-drawer.store";
import moment from "moment";
import Link from "next/link";
import AIInterview from "./AIInterview";

type Props = {
  interviews: Interview[];
  selectedInterview?: Interview;
}

const AIInterviewList = ({ interviews, selectedInterview }: Props) => {
  const { setOpen, setContent } = useGlobalDrawer();

  return (
    <div className="p-2 flex-1 flex flex-col gap-2 overflow-y-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      {interviews.map((interview) => {
        const job = JOB_APPLICATIONS.find((job) => job.id === interview.job_application_id);
        const company = COMPANIES.find((company) => company.id === job?.company_id);

        return (
          <Link
            key={interview.id}
            href={`/dashboard/ai-interviews/${interview.id}`}
            className={cn("p-2 flex gap-2 hover:bg-primary/20 rounded-sm", interview.id === selectedInterview?.id && "bg-primary/20")}
            onClick={(e) => {
              if (window.innerWidth < 768) {
                setOpen(true);
                setContent(
                  <>
                    <DrawerTitle hidden>Interview of {job?.job_title}</DrawerTitle>
                    {company && <AIInterview selectedInterview={interview} className='h-[80vh]' />}
                  </>
                );
              }
            }}
          >
            <div className="text-sm">
              <h2 className='font-semibold'>{job?.job_title}</h2>
              <p>at {company?.name}</p>
            </div>
            <p className="ml-auto text-xs text-muted-foreground">
              {moment(interview.created_at).fromNow(true)}
            </p>
          </Link>
        )
      })}
    </div>
  );
}

export default AIInterviewList;