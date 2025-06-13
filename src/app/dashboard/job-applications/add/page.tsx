import React from "react";
import JobApplicationForm from "../_components/JobApplicationForm";


type Props = {

};



const AddJobApplication = (props: Props) => {
  

  return (
    <div className="grid grid-cols-1 p-8">
      <div
        id="illustration"
        className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center"
      >
        <div className="justify-self-center md:justify-self-end lg:justify-self-end">
          <div className="w-[160px] h-[160px] md:w-[213px] md:h-[213px]">
            <img src="/Fill out-pana 1.png" alt="illustration" />
          </div>
        </div>
        <div className="col-span-2 text-center md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Let's
            <span className="text-primary"> track</span> it!
          </h1>
        </div>
      </div>
      <JobApplicationForm
        mode="add"
      />
    </div>
  );
};

export default AddJobApplication;
