
import React from 'react';
import JobApplocation from "../../_components/JobApplicationForm"
import JOB_APPLICATIONS from "@/dummy-data/job-applications";
import COMPANIES from "@/dummy-data/companies";
type Props = {
  params: Promise<{
    id:string
  }>;
};

const EditJobApplication = async({ params }: Props) => {
  const {id:strId} = await params;
  const id = Number(strId);
  const selectedJobApplication = JOB_APPLICATIONS.find((jobApplication)=>jobApplication.id===id)

  

  return (
    <div className="grid grid-cols-1">
      <div
        id="illustration"
        className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center"
      >
        <div className="justify-self-center md:justify-self-end lg:justify-self-end">
          <div className="w-[160px] h-[160px] md:w-[213px] md:h-[213px]">
            <img src="/To do list-bro 1.png" alt="illustration" />
          </div>
        </div>
        <div className="col-span-2 text-center md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Let's
            <span className="text-primary"> fix</span> it!
          </h1>
        </div>
      </div>
      
      <JobApplocation mode="edit" selectedJobApplication={selectedJobApplication}/>


    </div>
  );
};

export default EditJobApplication;
